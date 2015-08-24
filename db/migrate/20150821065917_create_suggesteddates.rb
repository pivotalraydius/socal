class CreateSuggesteddates < ActiveRecord::Migration
  def up
    create_table :suggesteddates do |t|
      t.string :invitation_code,  :default => ""
      t.datetime :suggested_datetime

      t.references :topic
      t.references :user
      t.timestamps
    end
  end

  def down
    drop_table :suggesteddates
  end
end
