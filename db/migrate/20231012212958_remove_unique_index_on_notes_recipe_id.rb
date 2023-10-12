class RemoveUniqueIndexOnNotesRecipeId < ActiveRecord::Migration[7.0]
  def change
    remove_index :recipe_id, :notes
    add_index :recipe_id, :notes
  end
end
