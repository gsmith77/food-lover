require 'json'
require 'rest-client' 
module Api
    module V1
        class FetchController < ApplicationController


            def search_businesses
                term = params[:term]  
                location = params[:location]  
                response = RestClient::Request.execute(
                    method: "GET",
                    url: "https://api.yelp.com/v3/businesses/search?term=#{term}&location=#{location}",  
                    headers: { Authorization: "Bearer #{ENV["YELP_API_KEY"]}" }
                )    
                results = JSON.parse(response.body)
                businesses = results['businesses']
                send_businesses_to_database = businesses.each do |business|
                    Business.find_or_create_by(
                    name: business['name'],
                    image_url: business['image_url'],
                    category: business['categories'][0]['title'],
                    rating: business['rating'],
                    price: business['price'],
                    address1: business['location']['address1'],
                    address2: business['location']['address2'],
                    city: business['location']['city'],
                    zip_code: business['location']['zip_code'],
                    country: business['location']['country'],
                    state: business['location']['state']
                    )
                end
                render json: businesses
            end

            def search_events
                location = params[:location]
                response = RestClient::Request.execute(
                    method: "GET",
                    url: "https://api.yelp.com/v3/events?location=#{location}",  
                    headers: { Authorization: "Bearer #{ENV["YELP_API_KEY"]}" }  
                )    
                results = JSON.parse(response.body)
                events = results['events']
                send_events_to_database = events.each do |event|
                    Event.find_or_create_by(
                    attending_count: event['attending_count'],
                    category: event['category'],
                    cost: event['cost'],
                    description: event['description'],
                    image_url: event['image_url'],
                    interested_count: event['interested_count'],
                    is_canceled: event['is_canceled'],
                    is_free: event['is_free'],
                    name: event['name'],
                    time_end: event['time_end'],
                    time_start: event['time_start'],
                    address1: event['location']['address1'],
                    address2: event['location']['address2'],
                    city: event['location']['city'],
                    zip_code: event['location']['zip_code'],
                    country: event['location']['country'],
                    state: event['location']['state']
                    )
                end
                render json: events
            end

            
            def business_reviews
                id = params[:id]
                response = RestClient::Request.execute(
                    method: 'GET',
                    url: "https://api.yelp.com/v3/businesses/#{id}/reviews",
                    headers: {Authorization: "Bearer #{ENV["YELP_API_KEY"]}"}
                )
                results = JSON.parse(response)
                if params['andSign']
                    andSign = "&"
                    biz_name = params['firstHalf'] + andSign + params['secondHalf']
                    biz = Business.find_by(name: biz_name)
                else
                    biz = Business.find_by(name: params['name'])
                end
                #try and find your review for this business with the business id
                reviews = results['reviews']
                send_reviews_to_database = reviews.each do |review|
                    Review.find_or_create_by(
                    text: review['text'],
                    rating: review['rating'],
                    user_name: review['user']['name']
                    )
                end
                render json: biz.reviews + reviews
            end
        end
    end
end