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

  def update
    @rating = Rating.find_by(id: params[:id])
    @recipe = @rating.recipe

    if @rating.update(user_id: params[:user_id], recipe_id: params[:recipe_id], score: params[:score])
      render "api/recipes/show"
    else
      render json: { errors: @rating.errors.full_messages }, status: 422;
    end
  end

  def destroy
    @rating = Rating.find_by(id: params[:id])
    @rating.destroy! if @rating
  end
end
