# == Schema Information
#
# Table name: notes
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  name       :string           not null
#  user_id    :bigint
#  recipe_id  :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Note < ApplicationRecord
    validates :body, presence: { message: 'cannot be blank' }
    validates :name, presence: { message: 'cannot be blank' }

    belongs_to :user
    belongs_to :recipe
end
