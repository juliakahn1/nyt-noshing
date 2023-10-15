class RemoveCooked < ActiveRecord::Migration[7.0]
  def change
    remove_column :saved_recipes, :cooked
  end
end
