require 'pry'
require "json"
require 'rest-client' 
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
        all_businesses = businesses.each do |business|
            Business.find_or_create_by(
            name: business['name'],
            image_url: business['image_url'],
            category: business['categories'][0]['title'],
            rating: business['rating'],
            address1: business['location']['address1'],
            address2: business['location']['address2'],
            city: business['location']['city'],
            zip_code: business['location']['zip_code'],
            country: business['location']['country'],
            state: business['location']['state']
            )
        end
        render json: all_businesses
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
        binding.pry
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
        reviews = results['reviews']
        render json: reviews
      end
      

end