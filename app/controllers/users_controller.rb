class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create_account
        user = User.create!(user_params)
        session[:user_id] ||= user.id
        session[:user_type] ||= user.user_type
        render json: user
    end

    def login
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] ||= user.id
            session[:user_type] ||= user.user_type
            render json: user, status: :created
        else
            render json: {errors: [error: "Invalid User"]}, status: :not_found
        end
    end

    def logout
        session.delete :user_id
        session.delete :user_type
        head :no_content
    end

    def index 
        users = User.all
        render json:users
    end
    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :bio)
    end

    def render_unprocessable_entity_response(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

end
