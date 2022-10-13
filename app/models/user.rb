class User < ApplicationRecord
    enum user_type: {landlord: 0, tenant: 0}
    has_secure_password
    has_many :houses

    validates :email, uniqueness: true
    validates :bio, presence: true, length: { minimum: 50 }
end
