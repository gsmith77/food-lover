module Api
    module V1
        class UsersController < ApplicationController

            def create
                @user = User.new(user_params)
                if @user.save
                    render json: @user
                else
                    render json: @user.errors
                end
            end

            def show
                params_for_user = JSON.parse(params['id'])['user']
                @user = User.find_by(username: params_for_user['username'])
                if @user
                    render json: @user
                else
                    render json: {status: 404, message: 'No User Found. Please Try Again.'}
                end
            end

            private

            def user_params
                params.require(:user).permit(:username, :password)
            end
        end
    end
end
