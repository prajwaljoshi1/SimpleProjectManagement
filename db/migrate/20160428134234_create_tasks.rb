class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.date :due_date
      t.string :color
      t.integer :task_list_id
      t.integer :task_owner_id
      t.integer :position
      t.string :alias

      t.timestamps null: false
    end
  end
end
