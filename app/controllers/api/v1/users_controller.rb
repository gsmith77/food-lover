module Api
    module V1
        class UsersController < ApplicationController

            before_action :authenticate_user!, only: [:show]

            def create
                #check password to password_confirmation
                #find or create by since the user could exist
                #check if passwords are same then check if there is a user already in database
                @user = User.find_by(email: user_params['email'])
                if @user 
                    render json: @user
                else
                    @user = User.new(user_params)
                    if @user.save
                        binding.pry
                        @user.remember_me!
                        render json: @user
                    else
                        render json: {status: 404, message: @user.errors}
                    end
                end
            end

            def show
                params_for_user = JSON.parse(params['id'])['user']
                @user = User.find_by(email: params_for_user['email'])
                if @user
                    render json: @user
                else
                    render json: {status: 404, message: 'No User Found. Please Try Again.'}
                end
            end

            def logout
                @user = User.find_by(email: user_params['email']).forget_me!
            end

            private

            def user_params
                params.require(:user).permit(:email, :password)
            end
        end
    end
end
