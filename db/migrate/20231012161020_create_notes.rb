class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.text :body, null: false
      t.string :name, null: false
      t.references :user, foreign_key: true
      t.references :recipe, foreign_key: true, index: { unique: true }
      t.timestamps
    end
  end
end
