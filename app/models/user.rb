class User < ApplicationRecord
    enum user_type: [:landlord, :tenant]
    has_secure_password
    has_many :houses

    validates :email, uniqueness: true
    validates :bio, presence: true, length: { minimum: 50 }
end
