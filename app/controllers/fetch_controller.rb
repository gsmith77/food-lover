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