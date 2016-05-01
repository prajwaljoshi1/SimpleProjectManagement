class TaskListsController < ApplicationController

  def index
    # @projects = current_user.projects
    @lists = TaskList.all
    render json: @lists, status: :ok
  end

  def new
  end

  def create
  end

end
