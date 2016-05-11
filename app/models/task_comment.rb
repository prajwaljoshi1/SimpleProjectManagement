class TaskComment < ActiveRecord::Base
  belongs_to :task

  default_scope { order(created_at: :desc) }

  def created_at_timestamp
    created_at.to_time.to_i
  end


end
