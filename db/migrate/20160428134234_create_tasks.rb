class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.date :due_date
      t.string :color
      t.integer :Tasklist_id

      t.timestamps null: false
    end
  end
end
