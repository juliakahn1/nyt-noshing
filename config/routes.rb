Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      resources :saved_recipes, only: [:index, :create, :destroy]
    end
    resource :session, only: [:show, :create, :destroy]
    resources :recipes, only: [:show, :index] do
      resources :notes, except: [:show]
    end
  end

  get '*path', to: "static_pages#frontend_index"

end
