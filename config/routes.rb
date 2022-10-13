Rails.application.routes.draw do

  # USERS AUTHENTICATION
  post '/signup', to: 'users#create_account'
  get '/me', to: 'users#auto_login'
  post '/login', to: 'users#login'
  delete '/logout', to: 'users#logout'
  
  get '/index', to: 'users#index'

  # HOUSES GET/POST/PATCH/DELETE
  resources :houses

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
