class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :organisation
      t.integer :project_owner_id

      t.timestamps null: false
    end
  end
end
