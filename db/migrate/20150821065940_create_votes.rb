class CreateVotes < ActiveRecord::Migration
  def up
    create_table :votes do |t|
      t.integer :vote,                  :default => 0
      t.datetime :selected_datetime

      t.references :user
      t.references :topic
      t.references :suggesteddate
      t.timestamps
    end
  end

  def down
    drop_table :votes
  end
end
