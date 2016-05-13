class TaskCommentSerializer < ActiveModel::Serializer
  attributes :id, :task_id, :message, :user_alias, :created_at_timestamp

end
