# frozen_string_literal: true

require 'rails_helper'

RSpec.describe PolygonsController, type: :controller do
  describe 'GET index' do
    it 'assigns all coordinates as gon.coordinates' do
      get :index
      expect(response.status).to eq 200
      expect(response).to render_template(:index)
    end
  end
end
