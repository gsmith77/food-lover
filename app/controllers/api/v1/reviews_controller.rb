module Api
    module V1
        class ReviewsController < ApplicationController

            def index
                
            end

            def create
                user = User.find(params['review']['user']['id'])
                business = Business.find_by(name: params['review']['business']['name'])
                @review = Review.new(text: params['review']['text'], rating: params['review']['rating'], user_name: params['review']['user_name'], business_id: business.id, user_id: user.id)
                # review_params['user']
                # FIX THESE ISSUES
                #business
        # @details={:business=>[{:error=>:blank}], :user=>[{:error=>:blank}]},
        # @messages={:business=>["must exist"], :user=>["must exist"]}
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
