class TaskListSerializer < ActiveModel::Serializer
  attributes :id, :title, :project_id, :position

   has_many :tasks, embed: :objects
end
