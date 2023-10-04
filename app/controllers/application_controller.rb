class ApplicationController < ActionController::API
    # include ActionController::RequestForgeryProtection
    # protect_from_forgery with: :exception # CSRF

    # before_action :attach_authenticity_token, :snake_case_params # transform from camelCase to snake_case
    before_action :snake_case_params # transform from camelCase to snake_case

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        if !logged_in?
            # no redirects in single page app
            render json: { errors: ['You must be logged in'] }, status: :unauthorized
        end
    end

    def require_logged_out
        if logged_in?
            # no redirects in single page app
            render json: { errors: ['You must be logged out'] }, status: :unauthorized
        end
    end

    def logged_in?
        !!current_user
    end


    def login!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout!
        current_user.reset_session_token! # removes token from database
        session[:session_token] = nil # removes token from browser cookie
        @current_user = nil # remove from instance variable
    end

    private

    # def attach_authenticity_token
    #     headers['X-CSRF-Token'] = masked_authenticity_token(session)
    # end

    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end
end
