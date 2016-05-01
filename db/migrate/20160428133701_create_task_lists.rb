class CreateTaskLists < ActiveRecord::Migration
  def change
    create_table :task_lists do |t|
      t.string :title
      t.integer :project_id
      t.integer :task_list_owner_id
      t.timestamps null: false
      t.integer :position
    end
  end
end
