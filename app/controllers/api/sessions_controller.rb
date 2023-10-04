class Api::SessionsController < ApplicationController
  before_action :require_logged_out, only: [:create]
  before_action :require_logged_in, only: [:destroy]

  def show
    @user = current_user
    if @user
      render json: @user
      # render 'api/users/show' # this may change depending on where you want to route them
    else
      render json: nil
    end
  end

  def create
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      login!(@user)
      render json: @user
      # render 'api/users/show' # this may change depending on where you want to route them
    else
      render json: { errors: ['Invalid email or password combination'] }, status: 422
    end
  end

  def destroy
    logout!
    render json: { message: ['Successfully logged out'] }
    # render to index page again?
  end
end
