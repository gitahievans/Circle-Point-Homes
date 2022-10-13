class HousesController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    # list all houses
    def index 
        houses = House.all
        render json: houses, status: :ok
    end
    # show one house
    def show 
        house = find_house
        render json: house, status: :ok
    end

    def create 
        user = User.find(session[:user_id])
        if user.valid?
            house = user.houses.create(house_params)
            render json: house, status: :created
        else 
            render json: {error: "You do not have permission to create a new house"}, status: :not_found
        end
    end

    def update 
        house = find_house
        house.update(house_params)
        render json: house
    end

    def destroy 
        house = find_house
        house.destroy
        head :no_content
    end

    private 

    def find_house 
        House.find(params[:id])
    end

    def render_not_found 
        render json: {error: "House not found"}, status: :not_found
    end

    def house_params 
        params.permit(:location, :description, :image_url, :user_id)
    end
end
