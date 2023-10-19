# == Schema Information
#
# Table name: recipes
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  author      :string           not null
#  blurb       :text             not null
#  ingredients :text             default([]), not null, is an Array
#  cook_time   :string           not null
#  preparation :text             default([]), not null, is an Array
#  tags        :string           default([]), not null, is an Array
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  yield       :string
#
class Recipe < ApplicationRecord
  validates :name, :author, :blurb, :ingredients, :cook_time, :preparation, :tags, presence: true

  has_one_attached :photo
  has_many :notes
  has_many :saves, foreign_key: :user_id, class_name: :SavedRecipe
  has_many :ratings

  def average_rating
    scores = []
    self.ratings.each { |rating| scores << rating.score }
    total = scores.inject(0) { |total, ele| total + ele }
    return total / scores.length
  end

  def num_ratings
    return self.ratings.length
  end
end
