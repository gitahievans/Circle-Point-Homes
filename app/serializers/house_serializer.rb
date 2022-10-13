class HouseSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :image_url
  belongs_to :user
end
