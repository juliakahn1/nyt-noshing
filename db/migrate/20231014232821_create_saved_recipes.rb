class CreateSavedRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :saved_recipes do |t|
      t.boolean :cooked, default: false
      t.references :recipe, foreign_key: true, index: true
      t.references :user, foreign_key: true, index: true
      t.timestamps
    end

    add_index :saved_recipes, [:user_id, :recipe_id], unique: true

  end
end
