class CreateTaskComments < ActiveRecord::Migration
  def change
    create_table :task_comments do |t|
      t.text :message
      t.integer :task_id
      t.string :user_alias

      t.timestamps null: false
    end
  end
end
