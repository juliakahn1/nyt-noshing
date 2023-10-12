class AddYieldToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :yield, :string
  end
end
