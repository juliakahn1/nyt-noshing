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
#
class Recipe < ApplicationRecord
    validates :name, :author, :blurb, :ingredients, :cook_time, :preparation, :tags, presence: true

    ## TODO: ASSOCIATIONS

    has_one_attached :photo
    has_many :notes
end
