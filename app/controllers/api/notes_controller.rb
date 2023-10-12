class Api::NotesController < ApplicationController

    def index
        recipe_id = params[:recipe_id]
        @notes = Note.where(recipe_id: recipe_id)

        if @notes
            render :index
        else
            render json: { errors: @note.errors.full_messages }, status: 422;
        end
    end

    def create
        # pull from session token, userID
    end

    def edit

    end

    def update

    end

    def destroy

    end

    private

    def notes_params
        params.require(:note).permit(:body, :name)
    end

end
