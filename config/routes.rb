Rails.application.routes.draw do
  resources :polygons
  root 'polygons#index'
end
