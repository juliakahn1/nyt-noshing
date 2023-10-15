class AddCookedColToSrTable < ActiveRecord::Migration[7.0]
  def change
    add_column :saved_recipes, :cooked, :boolean, default: false
  end
end
