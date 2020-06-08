# frozen_string_literal: true

class Polygon
  include Mongoid::Document
  field :coordinates, type: Array
  field :name, type: String
end
