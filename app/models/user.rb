# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string
#  email           :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  has_many :user_projects
  has_many :projects, :through => :user_projects






  has_secure_password
  validates :email, :presence => true, :uniqueness => true
end
