class Api::SessionsController < ApplicationController
  # before_action :require_logged_out, only: [:create]
  before_action :require_logged_in, only: [:destroy]

  def show
    @user = current_user
    if @user
      render 'api/users/show' # may change depending on where you want to route users
    else
      render json: nil
    end
  end

  def create
    debugger
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      login!(@user)
      render 'api/users/show' # render to index page after login?
    else
      render json: { errors: ['Invalid email or password combination'] }, status: 422
    end
  end

  def destroy
    logout!
    render json: { message: ['Successfully logged out'] }
    # render to index page after logout?
  end
end
