class Review < ApplicationRecord
    belongs_to :business
    belongs_to :user

    def business_attributes=(business_attributes)
        business_attributes.each do |i, business_attribute|
           review = self.review.build(business_attribute)
        end
    end

    def user_attributes=(user_attributes)
        user_attributes.each do |i, user_attribute|
            review = self.review.build(user_attribute)
        end
    end
end
