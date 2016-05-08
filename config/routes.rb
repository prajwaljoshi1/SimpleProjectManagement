Rails.application.routes.draw do

  root :to => "pages#home"

  get '/signup' => 'users#new'
  resources :users, except: [:new]

  get '/projects' => 'projects#index'

  get '/tasklists' => 'task_lists#index'
  post '/tasklists' => 'task_lists#create'

  get '/tasks' => 'tasks#index'
  post '/task' => 'tasks#create'
  post '/tasks/sort' => 'tasks#sort'



  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'

end
