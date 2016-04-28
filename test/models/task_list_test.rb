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

require 'test_helper'

class TaskListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
