class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    before_action :authorize

    def index
        users = User.all
        render json: users, status: :ok
    end

    def index_specific
        users = User.where(user_type: params[:user_type]).all
        render json: users, status: :ok
    end

    def update_user
        user = User.find(session[:user_id])
        user.update!(user_params)
        render json: user, status: :created
    end



    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :bio, :user_type)
    end

    def render_unprocessable_entity_response(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

end
