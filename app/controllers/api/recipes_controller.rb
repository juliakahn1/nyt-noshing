class Api::RecipesController < ApplicationController
  before_action :require_logged_in, only: [:show]

  def index
    ## TODO: build logic for filtering
    # if params[:category]
    #   @recipes = Recipe.where(tags: params[:tags])
    # else
    # end
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
