class ApplicationController < ActionController::API
    rescue_from StandardError, with: :unhandled_error
    rescue_from ActionController::InvalidAuthenticityToken,
        with: :invalid_authenticity_token

    include ActionController::RequestForgeryProtection
    protect_from_forgery with: :exception # CSRF

    before_action :attach_authenticity_token, :snake_case_params # transform from camelCase to snake_case

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

    def attach_authenticity_token
        headers['X-CSRF-Token'] = masked_authenticity_token(session)
    end

    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end

    def invalid_authenticity_token # cleans up error response
        render json: { message: 'Invalid authenticity token' }, status: :unprocessable_entity
    end

    def unhandled_error(error) # errors for non-authenticity token errors
        if request.accepts.first.html?
            raise error
        else
            @message = "#{error.class} - #{error.message}"
            @stack = Rails::BacktraceCleaner.new.clean(error.backtrace)
            render 'api/errors/internal_server_error', status: :internal_server_error

            logger.error "\n#{@message}:\n\t#{@stack.join("\n\t")}\n"
        end
    end
end
