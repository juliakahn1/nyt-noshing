# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: 'is invalid' },
        length: { in: 3..255, message: 'address must be between 3 and 255 characters' }
    validates :password_digest, presence: true
    validates :password, length: { minimum: 8, message: 'must be longer than 8 characters'},
        allow_nil: true

    has_secure_password # handles password getter, setter, and is_password?
    before_validation :ensure_session_token

    has_many :notes
    has_many :saved_recipes

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.authenticate(password)
            return user
        else
            nil
        end
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= generate_session_token
    end


    def generate_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end

end
