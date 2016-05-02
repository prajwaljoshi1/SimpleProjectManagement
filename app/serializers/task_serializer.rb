class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :due_date, :color
end
