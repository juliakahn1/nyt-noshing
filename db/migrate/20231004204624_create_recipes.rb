class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name, null: false, index: { unique: true }
      t.string :author, null: false
      t.text :blurb, null: false
      t.text :ingredients, null: false, array: true, default: []
      t.string :cook_time, null: false
      t.text :preparation, null: false, array: true, default: []
      t.string :image_url, null: false
      t.string :tags, null: false, array: true, default: []

      t.timestamps
    end
  end
end
