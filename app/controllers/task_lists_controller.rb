class TaskListsController < ApplicationController

  def index
    # @projects = current_user.projects
    @lists = TaskList.all
    render json: @lists, status: :ok
  end

  def new
  end

  def create
      binding.pry
    list = TaskList.new(task_list_params)

    if list.save
      render json: list, status: :ok
    else
      binding.pry
      render nothing: true, status: :unprocessable_entity
    end
  end

  private

  def task_list_params

    params.require(:task_list)
          .permit(:title, :project_id)

  end



end
