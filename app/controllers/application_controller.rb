class ApplicationController < ActionController::API
  include ActionController::Cookies


  def authorize 
    render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
  end

  def authorize_add_house
    render json: {error: "You are unauthorized to view this page"}, status: :unauthorized unless session[:user_type] == 0
  end
end
