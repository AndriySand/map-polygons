# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Polygon, type: :model do
  it 'is invalid without a coordinates' do
    expect(Polygon.create(coordinates: [])).to_not be_valid
  end

  it 'coordinates have at least three dots' do
    coordinates = [{ lat: 48, lng: -3.5 }, { lat: 51, lng: -0.5 }, { lat: 48, lng: 2.5 }]
    expect(Polygon.create(coordinates: coordinates)).to be_valid
  end
end
