
class SavedRecipe < ApplicationRecord
    validates :cooked, inclusion: { in: [true, false] }
    validates :recipe_id, uniqueness: { scope: :user_id, message: "You've already saved this recipe" }

    belongs_to :user
    belongs_to :recipe
end
