# frozen_string_literal: true

class Polygon
  include Mongoid::Document
  field :coordinates, type: Array
  validates :coordinates, presence: true, length: { minimum: 3 }
  field :name, type: String
end
