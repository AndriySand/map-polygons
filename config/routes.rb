Rails.application.routes.draw do
  resources :polygons do
    collection do
      delete 'purge_all'
    end
  end
  root 'polygons#index'
end
