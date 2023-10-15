class Api::SavedRecipesController < ApplicationController
    def index
        user_id = current_user.id
        @saved_recipes = SavedRecipe.where(user_id: user_id)

        if @saved_recipes
            render :index
        else
            render json: { errors: @notes.errors.full_messages }, status: 422
        end
    end

    def create
        user_id = current_user.id
        @saved_recipe = SavedRecipe.new(saved_recipe_params)

        if @saved_recipe.save
            render :create
        else
            render json: { errors: @saved_recipe.errors.full_messages }
        end
    end

    def destroy
        @saved_recipe = SavedRecipe.find_by(id: params[:id])
        @saved_recipe.destroy!
    end

    private

    def saved_recipe_params
        params.require(:saved_recipe).permit(:user_id, :recipe_id)
    end
end
