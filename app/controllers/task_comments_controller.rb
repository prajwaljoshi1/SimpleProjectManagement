class TaskCommentsController < ApplicationController

  def create

    task_comment = TaskComment.new(task_comment_params)
    if task_comment.save
      render json: task_comment
    else
      render nothing: true, status: :unprocessable_entity
    end
  end

  private

  def task_comment_params
    params.require(:task_comment)
          .permit(:task_id,
                  :user_id,
                  :message,
                  :user_alias)
  end

end
