class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
        t.string :name
        t.string :image_url
        t.string :category
        t.float :rating
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
