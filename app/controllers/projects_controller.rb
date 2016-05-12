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
    @project.project_owner_id = current_user.id
    @project.users << current_user
    if @project.save
      redirect_to root_path
    end
  end

  def member
      project = Project.find(params[:project_id])
      user = User.find_by(email: params[:member_email])
      project.users << user if user


  end


 private
 def project_params
   params.require(:project)
         .permit(:title, :description, :organisation)
 end

end
