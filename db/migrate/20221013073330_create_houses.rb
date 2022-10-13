class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :location
      t.string :description
      t.string :image_url
      t.integer :user_id

      t.timestamps
    end
  end
end
