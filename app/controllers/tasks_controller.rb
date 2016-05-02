class TasksController < ApplicationController

  def index
    # @projects = current_user.projects
    @lists = Task.all
    render json: @lists, status: :ok
  end

  def new
  end

  def create
  end

end
