# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_18_023213) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "category"
    t.float "rating"
    t.string "price"
    t.string "address1"
    t.string "address2"
    t.string "city"
    t.string "zip_code"
    t.string "country"
    t.string "state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.integer "attending_count"
    t.string "category"
    t.float "cost"
    t.string "description"
    t.string "image_url"
    t.integer "interested_count"
    t.boolean "is_canceled"
    t.boolean "is_free"
    t.string "name"
    t.string "time_end"
    t.string "time_start"
    t.string "address1"
    t.string "address2"
    t.string "city"
    t.string "zip_code"
    t.string "country"
    t.string "state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "text"
    t.integer "rating"
    t.string "user_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
  end

end
