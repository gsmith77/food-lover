module Api
    module V1
        class ReviewsController < ApplicationController

            def index
                
            end

            def create
                user = User.find_by(email: params['review']['user']['email'])
                business = Business.find_by(name: params['review']['business']['name'])
                @review = Review.new(text: params['review']['text'], rating: params['review']['rating'], user_name: params['review']['user_name'], business_id: business.id, user_id: user.id)
                if @review.save
                    render json: @review
                else
                    render json: @review.errors
                end
            end

            def update
                
            end

            def destroy
            end

            private

            # def review_params
            #     binding.pry
            #     params.require(:review).permit(:text, :rating, :user, :user_name, business: [:id, :alias, :name, :image_url, :is_closed, :url, :review_count, :rating, :city, :zip_code, :country, :state,  {categories: []}, {coordinates: []}, {transactions: []}, :price, location: [], :phone, :display_phone, :distance], user: [:id, :first_name, :last_name, :password_digest, :email, :created_at, :updated_at])
            # end
        end
    end
end
