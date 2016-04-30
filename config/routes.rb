Rails.application.routes.draw do

  root :to => "pages#home"

  get '/signup' => 'users#new'
  resources :users, except: [:new]

  get '/projects' => 'projects#index'

  get '/lists' => 'list#index'



  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'

end
