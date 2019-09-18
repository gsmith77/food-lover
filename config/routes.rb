Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace 'api' do
    namespace 'v1' do
      get '/search_businesses', to: 'fetch#search_businesses'
      get '/search_events', to: 'fetch#search_events'
      get '/business_reviews', to: 'fetch#business_reviews'
      
      resources :users
    end
  end


end
