# frozen_string_literal: true

class PolygonsController < ApplicationController
  def index
    gon.polygons = Polygon.all.map do |polygon|
      Gmaps4rails.build_markers(polygon.coordinates) do |coords, marker|
        marker.lat coords[0]
        marker.lng coords[1]
      end
    end
  end
end
