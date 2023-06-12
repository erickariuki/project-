class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    before do
        response.headers["Access-Control-Allow-Origin"]="*"
    end




    # create a car
  
    put '/cars' do
        car = Car.create(
            make: params[:make],
            model: params[:model],
            user_id: params[:user_id]
        )
        car.to_json
    end

    
     # a user creates a car instance
    get '/users' do 
        user = User.all
        user.to_json
    end

    # a user can view all cars created 
    get '/cars' do 
        user = Car.all
        user.to_json
    end


    # a user can view a specific car
    # a user can update details of a car instance
    # a user can delete a car instance
    
end