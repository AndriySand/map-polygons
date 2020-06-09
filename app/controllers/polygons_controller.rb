# frozen_string_literal: true

class PolygonsController < ApplicationController
  def index
    gon.polygons = Polygon.all.map(&:coordinates)
  end
end
