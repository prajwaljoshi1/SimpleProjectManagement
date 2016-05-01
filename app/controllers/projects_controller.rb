class ProjectsController < ApplicationController

# json only
  def index
    @projects = current_user.projects
    render json: @projects, status: :ok, root: false
  end

end
