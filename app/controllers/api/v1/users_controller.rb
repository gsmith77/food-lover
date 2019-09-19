module Api
    module V1
        class UsersController < ApplicationController

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
                        #remember_token is good for two weeks of remembering user for future reference                        
                        @user.remember_me!
                        render json: @user
                    else
                        render json: {status: 404, message: @user.errors}
                    end
                end
            end

            def show
                params_for_user = JSON.parse(params['id'])['user']
                #have to manually add .com since it see com as a format instead of part of the email
                params_for_user_email = params_for_user['email'] + '.com'
                @user = User.find_by(email: params_for_user_email)
                if @user
                    render json: @user
                else
                    render json: {status: 404, message: 'No User Found. Please Try Again.'}
                end
            end

            def logout
                binding.pry
                @user = User.find(id: params['id']).forget_me!
                render json: {status: 200, message: 'You are logged out'}
            end

            private

            def user_params
                params.require(:user).permit(:email, :password)
            end
        end
    end
end
