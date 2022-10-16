Rails.application.routes.draw do

  # USERS_SESSION AUTHENTICATION
  post '/signup', to: 'sessions#create_account'
  get '/me', to: 'sessions#auto_login'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  # USERS GET/POST/PATCH/DELETE  
  get '/users/all', to: 'users#index'
  get '/users/:user_type', to: 'users#index_specific'
  patch '/me/update', to: 'users#update_user'
  post '/users/newsletter', to: 'users#newsletter'

  # HOUSES GET/POST/PATCH/DELETE
  resources :houses

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
