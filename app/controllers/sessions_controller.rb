class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    before_action :authorize
    skip_before_action :authorize, only: [:create_account, :login]

    def create_account
        user = User.create!(user_params)
        session[:user_id] ||= user.id
        session[:user_type] ||= user.user_type
        render json: user
    end

    def auto_login
        user = User.find(session[:user_id])
        render json: user, status: :created
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

    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :bio, :user_type)
    end

    def render_unprocessable_entity_response(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end
end
