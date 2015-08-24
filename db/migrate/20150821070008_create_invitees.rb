class CreateInvitees < ActiveRecord::Migration
  def up
    create_table :invitees do |t|
      t.string :invitation_code,  :default => ""

      t.references :user
      t.references :topic
      t.timestamps
    end
  end

  def down
    drop_table :invitees
  end
end
