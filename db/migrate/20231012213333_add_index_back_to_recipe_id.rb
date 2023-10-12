class AddIndexBackToRecipeId < ActiveRecord::Migration[7.0]
  def change
    add_index :notes, :recipe_id
  end
end
