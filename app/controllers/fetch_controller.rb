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
            results = JSON.parse(response)
           render json: results
        # redirect_to '../../src/actions/fetchBusinesses'
        #props should be a url
    end

end