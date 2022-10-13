class DropHouses < ActiveRecord::Migration[6.1]
  def change
    drop_table :houses
  end
end
