class RatingsController < ApplicationController
  # def create
  #   @rating = Rating.new(rating_params)
  #   if @rating.create!

  #   end
  # end

  private

  def rating_params
    params.require(:rating).permit(:recipe_id, :user_id, :score)
  end
end
