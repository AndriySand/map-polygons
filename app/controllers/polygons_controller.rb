# frozen_string_literal: true

class PolygonsController < ApplicationController
  def index
    gon.polygons = Polygon.all.pluck(:coordinates)
  end
end
