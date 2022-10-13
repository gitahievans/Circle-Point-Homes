class HousesController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found


    def index 
        houses = House.all
        render json: houses, status: :ok
    end

    def show 
        house = find_house
        render json: house, status: :ok
    end

    private 

    def find_house 
        House.find(params[:id])
    end

    def render_not_found 
        render json: {error: "House not found"}, status: :not_found
    end
end
