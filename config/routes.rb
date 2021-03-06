Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, :only => [:create, :index]
  get '/signup' => 'users#new'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  root :to => 'pages#home'

  get '/admin' => 'users#admin'

  #map
  get '/storymap' => 'map#map_page'
  post '/user/favorite_location' => 'map#create_favorite_location'
  get '/storymap/marker' => 'map#marker', :as => 'marker'

  #comment
  get '/comments' => 'comments#new'
  post '/comments' => 'comments#create', :as => 'new_comment'
  get '/comments/:id/edit' => 'comments#edit', :as => 'edit_comment'
  patch '/comments/:id' => 'comments#update', :as => 'update'
  delete '/comments/:id' => 'comments#destroy', :as => 'destroy'
end
