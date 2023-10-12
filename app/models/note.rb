class Note < ApplicationRecord
    validates :body, :name, presence: true

    belongs_to :user
    belongs_to :recipe
end
