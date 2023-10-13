class Api::NotesController < ApplicationController

    def index
        recipe_id = params[:recipe_id]
        @notes = Note.where(recipe_id: recipe_id)
        @notes.sort_by {|note| note.created_at} # revisit sorting if doesn't work

        if @notes
            render :index
        else
            render json: { errors: @note.errors.full_messages }, status: 422;
        end
    end

    def create
        @note = Note.new(notes_params)
        @note.recipe_id = params[:recipe_id]
        @note.user_id = current_user.id # make sure this works

        if @note.save
            render :create
        else
            render json: { errors: @note.errors.full_messages }
        end
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
