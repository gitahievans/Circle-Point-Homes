class House < ApplicationRecord

    belongs_to :user

    validates :location, presence: true
    validates :description, length: {minimum: 50}
end
