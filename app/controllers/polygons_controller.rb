# frozen_string_literal: true

class PolygonsController < ApplicationController
  def index
    gon.polygons = Polygon.all.pluck(:coordinates)
  end

  def create
    polygon = Polygon.new(polygon_params)
    if polygon.save
      render plain: 'Polygon was saved'
    else
      render plain: polygon.errors.messages
    end
  end

  def purge_all
    Polygon.delete_all
    render plain: 'All polygons were purged'
  end

  private

  def polygon_params
    coordinates = JSON.parse(params[:polygon][:coordinates])
    params.require(:polygon).permit(:name, :coordinates).merge(coordinates: coordinates)
  end
end
