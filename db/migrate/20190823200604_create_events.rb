class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :attending_count
      t.string :category
      t.float :cost
      t.string :description
      t.string :image_url
      t.integer :interested_count
      t.boolean :is_canceled
      t.boolean :is_free
      t.string :name
      t.string :time_end
      t.string :time_start
      t.string :address1
      t.string :address2
      t.string :city
      t.string :zip_code
      t.string :country
      t.string :state
      t.timestamps
    end
  end
end
