class RatingsController < ApplicationController
  # def create
  #   @rating = Rating.new(rating_params)
  #   if @rating.create!
        # view for show
  #   end
  # end

  def show
    # single review
  end

  private

  def rating_params
    params.require(:rating).permit(:recipe_id, :user_id, :score)
  end
end
