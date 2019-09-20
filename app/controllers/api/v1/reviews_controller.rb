module Api
    module V1
        class ReviewsController < ApplicationController

            def index
                
            end

            def create
                binding.pry
                @review = Review.new(review_params)
                FIX THESE ISSUES
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

            def review_params
                params.require(:review).permit(:text, :rating, :user_name)
            end
        end
    end
end
