# == Schema Information
#
# Table name: ratings
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  recipe_id  :bigint           not null
#  score      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Rating < ApplicationRecord
  validates :score, :recipe_id, :user_id, presence: true
  validates :score, numericality: { in: 1..5, message: 'must be between 1 and 5' }

  belongs_to :recipe
  belongs_to :user
end
