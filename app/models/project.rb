# == Schema Information
#
# Table name: projects
#
#  id               :integer          not null, primary key
#  title            :string
#  description      :text
#  organisation     :string
#  project_owner_id :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Project < ActiveRecord::Base
  has_many :user_projects
  has_many :users, :through => :user_projects
end
