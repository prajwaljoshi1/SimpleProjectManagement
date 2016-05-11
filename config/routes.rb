Rails.application.routes.draw do

  root :to => "pages#home"

  get '/signup' => 'users#new'
  resources :users, except: [:new]

  get '/projects' => 'projects#index'
  get '/project/new' => 'projects#new'
  post 'projects'  => 'projects#create'
  post '/project/member' => 'projects#member'

  get '/tasklists' => 'task_lists#index'
  post '/tasklists' => 'task_lists#create'
  post '/tasklists/sort' => 'task_lists#sort'



  get '/tasks' => 'tasks#index'
  post '/task' => 'tasks#create'
  post '/tasks/sort' => 'tasks#sort'
  put '/task/:id' => 'tasks#update'
  delete '/task/:id' => 'tasks#destroy'



  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'

end
