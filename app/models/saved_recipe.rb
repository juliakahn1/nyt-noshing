# == Schema Information
#
# Table name: saved_recipes
#
#  id         :bigint           not null, primary key
#  cooked     :boolean          default(FALSE)
#  recipe_id  :bigint
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class SavedRecipe < ApplicationRecord
    validates :cooked, inclusion: { in: [true, false] }
    validates :recipe_id, uniqueness: { scope: :user_id, message: "You've already saved this recipe" }

    belongs_to :user
    belongs_to :recipe
end
