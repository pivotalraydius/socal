class CreateTopics < ActiveRecord::Migration
  def up
    create_table :topics do |t|
      t.string :title,            :default => ""
      t.string :content,          :default => ""
      t.string :place_name,       :default => ""
      t.string :address,          :default => ""
      t.string :url,              :default => ""
      t.string :invitation_code,  :default => ""
      t.string :creator_name,     :default => ""
      t.string :creator_email,    :default => ""
      t.integer :confirm_state,   :default => 0
      t.integer :confirmed_date,  :default => 0
      t.float :latitude,          :default => 0
      t.float :longitude,         :default => 0

      t.references :user
      t.timestamps
    end
  end

  def down
    drop_table :topics
  end
end
