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
#  image_url   :string           not null
#  tags        :string           default([]), not null, is an Array
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Recipe < ApplicationRecord
    validates :name, :author, :blurb, :ingredients, :cook_time, :preparation, :image_url, :tags, presence: true
    
end
