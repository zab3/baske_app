Rails.application.routes.draw do

  devise_for :users

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end

  root  'home#index'
  
  resources :home, only:[:index] do
    collection do
      get 'chat', 'other'
    end
  end

  resources :users, only:[:show]
  
  resources :tweets do
    member do
      get 'discussion'
    end
    resources :tweet_comments, only: [:create]
  end
  
  resources :items, only:[:index]
  
end
