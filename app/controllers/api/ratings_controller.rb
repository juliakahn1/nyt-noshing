class Api::RatingsController < ApplicationController
  def create
    @rating = Rating.new(user_id: params[:user_id], recipe_id: params[:recipe_id], score: params[:score])
    @recipe = @rating.recipe
    if @rating.save
      render "api/recipes/show"
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
end
