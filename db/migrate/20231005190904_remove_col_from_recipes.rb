class RemoveColFromRecipes < ActiveRecord::Migration[7.0]
  def change
    remove_column :recipes, :image_url
  end
end
