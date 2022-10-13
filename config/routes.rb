Rails.application.routes.draw do

  # USERS AUTHENTICATION
  post '/signup', to: 'users#create_account'
  post '/login', to: 'users#login'
  delete '/logout', to: 'users#logout'
  
  get '/index', to: 'users#index'

  resources :houses

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
