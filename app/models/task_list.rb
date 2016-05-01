# == Schema Information
#
# Table name: task_lists
#
#  id         :integer          not null, primary key
#  title      :string
#  project_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TaskList < ActiveRecord::Base

belongs_to :project
has_many :task
end
