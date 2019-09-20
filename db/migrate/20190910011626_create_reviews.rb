class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :text
      t.integer :rating
      t.string :user_name
      t.integer :business_id
      t.integer :user_id
    end
  end
end
