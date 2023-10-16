class Api::SavedRecipesController < ApplicationController
    def index
        user = current_user
        @saved_recipes = user.saved_recipes
        if @saved_recipes
            render :index
        else
            render json: { errors: @notes.errors.full_messages }, status: 422
        end
    end

    def create
        @saved_recipe = SavedRecipe.new(recipe_id: params[:recipe_id], user_id: params[:user_id])

        if @saved_recipe.save!
            render :create
        else
            render json: { errors: @saved_recipe.errors.full_messages }
        end
    end

    def destroy
        user_id = current_user.id
        @saved_recipe = SavedRecipe.find_by(id: params[:id])
        @saved_recipe.destroy!
    end

    private

    # def saved_recipe_params
    #     debugger
    #     params.require(:saved_recipe).permit(:user_id, :recipe_id)
    # end
end
