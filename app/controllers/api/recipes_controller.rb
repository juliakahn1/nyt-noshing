class Api::RecipesController < ApplicationController
  # before_action :require_logged_in, only: [:show]

  def index
    @recipes = Recipe.all
    if @recipes
      render 'api/recipes/index'
    else
      render json: nil
    end
  end

  def show
    @recipe = Recipe.find_by(id: params[:id])
    if @recipe
      render 'api/recipes/show'
    else
      render json: { errors: ['Could not find recipe'] }
    end
  end

end
