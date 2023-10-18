class Note < ApplicationRecord
    validates :body, presence: { message: 'cannot be blank' }
    validates :name, presence: { message: 'cannot be blank' }

    belongs_to :user
    belongs_to :recipe
end
