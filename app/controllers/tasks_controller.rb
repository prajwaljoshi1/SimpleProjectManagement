class TasksController < ApplicationController

  def index
    # @projects = current_user.projects
      binding.pry
      render json: @lists, status: :ok
  end

  def new
  end

  def create
     task = Task.new(task_params)
     if task.save
       render json: task, status: :ok
     else
       render nothing: true, status: :unprocessable_entity
     end
   end


   private
   def task_params
     params.require(:task)
            .permit(:title,
                    :description,
                    :due_date,
                    :task_list_id,
                    :position,
                    :color,
                    :task_owner_id)
    end

end
