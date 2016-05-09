class TasksController < ApplicationController

  def index
    # @projects = current_user.projects
      binding.pry
      render json: @lists, status: :ok
  end

  def new
  end

  def sort
    task_list = TaskList.find(params[:list_id]);
    task_id_arr =  params[:task].map(&:to_i)
    pos = 1
    task_id_arr.each do |task_id|
        Task.find(task_id)
             .update_attributes(position: pos, task_list_id: params[:list_id])
        pos = pos + 1

    end
    tasks = task_list.tasks.where(id: task_id_arr)

    render json: tasks
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
                    :task_owner_id,
                    :alias)
    end

end
