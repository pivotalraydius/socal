class CreatePosts < ActiveRecord::Migration
  def up
    create_table :posts do |t|
      t.string :content,        :default => ""

      t.references :topic
      t.references :user
      t.timestamps
    end
  end

  def down
    drop_table :posts
  end
end
