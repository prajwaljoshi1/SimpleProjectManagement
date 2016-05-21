class ProjectsController < ApplicationController

# json only
  def index
    @projects = current_user.projects

    render json: @projects, status: :ok, root: false
  end


  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)

    #add default lists to new project






    @project.project_owner_id = current_user.id
    @project.users << current_user
    if @project.save
      binding.pry
      list = TaskList.new
      list.title = 'in progress'
      list.project_id = @project.id
      list.task_list_owner_id = current_user
      list.position = 1
      list.save

      list = TaskList.new
      list.title = 'todo'
      list.project_id = @project.id
      list.task_list_owner_id = current_user
      list.position = 2
      list.save

      list = TaskList.new
      list.title = 'done'
      list.project_id = @project.id
      list.task_list_owner_id = current_user
      list.position = 4
      list.save

      list = TaskList.new
      list.title = 'backlog'
      list.project_id = @project.id
      list.task_list_owner_id = current_user.id
      list.position = 3
      list.save

      redirect_to root_path
    end
  end

  def member
      project = Project.find(params[:project_id])
      user = User.find_by(email: params[:member_email])

      if user
        project.users << user
        render json: user, status: :ok
      end
  end


 private
 def project_params
   params.require(:project)
         .permit(:title, :description, :organisation)
 end

end
