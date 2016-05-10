class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :alias
end



#  id              :integer          not null, primary key
#  name            :string
#  email           :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
