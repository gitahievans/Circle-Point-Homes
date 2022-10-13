class DropLandlords < ActiveRecord::Migration[6.1]
  def change
    drop_table :landlords
  end
end
