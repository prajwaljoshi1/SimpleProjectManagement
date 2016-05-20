class UsersController < ApplicationController

  before_action :require_same_user, only: [:edit, :update]
  before_action :require_admin, only: [:destroy]


  #only pass json
  def index
    @users = User.all
    render json: @users, status: :ok
  end

  def show
    @user = User.find(params[:id])
    render json: @user, status: :ok

  end



  def new
    @user = User.new
  end


  def create
    # binding.pry
    @user = User.new(user_params)
    @user.alias = @user.name.split.map(&:first).join.upcase
    if @user.save
      binding.pry
      session[:user_id] = @user.id
      binding.pry
        flash[:success] = "Welcome  #{@user.name}."
        binding.pry
        redirect_to root_path
        binding.pry
    else
      flash[:danger] ="something went wrong"
      render'new'
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      flash[:success] = "Account was updated successfully"
      redirect_to articles_path
    else
      flash[:danger] ="something went wrong"
      render 'edit'
    end
  end

    def destroy
      @user = User.find(params[:id])
      @user.destroy
      flash[:danger] = "User and all articles created by them has been deleted."
      redirect_root_path
    end


  private
  def user_params
    params.require(:user)
          .permit(:name, :email, :password, :password_confirmation)
  end

  def require_same_user
    if current_user != @user && !current_user.admin?
      flash[:danger] = "You can only edit your account"
      redirect_to root_path
    end
  end

  def require_admin
    if logged_in? && !current_user.admin?
      flash[:danger] = "only admin users can perform this action"
      redirect_to root_path
    end
  end

end
