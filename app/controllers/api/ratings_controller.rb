class Api::RatingsController < ApplicationController
  def create
    @rating = Rating.new(rating_params)
    if @rating.create!
      redirect_to "api/recipes/show"
    else
      render json: { errors: @rating.errors.full_messages }, status: 422;
    end
  end

  # def show
  #   @rating = Rating.find_by(id: params[:id])
  #   if @rating
  #     render :show
  #   else
  #     render json: { errors: @rating.errors.full_messages }, status: 422;
  #   end
  # end

  private

  def rating_params
    params.require(:rating).permit(:recipe_id, :user_id, :score)
  end
end
