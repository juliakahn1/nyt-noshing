class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.references :user, null: false, index: true, foreign_key: true
      t.references :recipe, null: false, index: true, foreign_key: true
      t.integer :score, null: false
      t.timestamps
    end
  end
end
