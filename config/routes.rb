Rails.application.routes.draw do

  root :to => "pages#home"

  get '/signup' => 'users#new'
  resources :users, except: [:new]

end
