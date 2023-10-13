class RemoveRecipeIdIndex < ActiveRecord::Migration[7.0]
  def change
    remove_index :notes, :recipe_id
  end
end
