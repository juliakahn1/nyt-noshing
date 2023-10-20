class Api::SavedRecipesController < ApplicationController
    def index
        user = current_user
        user ? @saved_recipes = user.saved_recipes : @saved_recipes = nil
        if @saved_recipes
            render :index
        elsif @saved_recipe != nil
            render json: { errors: @saved_recipes.errors.full_messages }, status: 422
        else
            render json: { errors: 'Try again later'}
        end
    end

    def create
        @saved_recipe = SavedRecipe.new(recipe_id: params[:recipe_id], user_id: params[:user_id])

        if @saved_recipe.save!
            render :create
        elsif @saved_recipe != nil
            render json: { errors: @saved_recipe.errors.full_messages }
        else
            render json: { errors: 'Try again later'}
        end
    end

    def destroy
        user_id = current_user.id
        @saved_recipe = SavedRecipe.find_by(id: params[:id])
        @saved_recipe.destroy!
    end

    private
end
