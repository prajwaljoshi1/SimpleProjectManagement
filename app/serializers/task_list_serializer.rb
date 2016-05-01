class TaskListSerializer < ActiveModel::Serializer
  attributes :id, :title, :project_id

   has_many :tasks, embed: :objects
end
