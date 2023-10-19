Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      resources :saved_recipes, only: [:index, :create, :destroy]
    end
    resource :session, only: [:show, :create, :destroy]
    resources :recipes, only: [:show, :index] do
      resources :notes, except: [:show]
    end
    resources :ratings, only: [:create]
  end
end
