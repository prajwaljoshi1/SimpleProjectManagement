class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :due_date, :color, :position, :alias

  has_many :task_comments, embed: :objects

end
