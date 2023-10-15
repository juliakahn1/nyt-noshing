class RemoveNullFromCooked < ActiveRecord::Migration[7.0]
  def change
    remove_column :saved_recipes, :cooked
    add_column :saved_recipes, :cooked, :boolena, default: false
  end
end
