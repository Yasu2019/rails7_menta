Rails.application.routes.draw do
  devise_for :users
  get 'products/index2' => 'products#index2', as: 'index2_product'
  get 'products/index3' => 'products#index3', as: 'index3_product'# 全アイテムのステイタス一覧
  get 'products/index4' => 'products#index4', as: 'index4_product'
  get 'products/index5' => 'products#index5', as: 'index5_product'
  get 'products/index_document' => 'products#index_document', as: 'index_document'
  get 'products/new_document' => 'products#new_document', as: 'new_document'

  get 'products/index6' => 'products#index6', as: 'index6_product'
  get 'products/index7' => 'products#index7', as: 'index7_product'
  get 'products/index8' => 'products#index8', as: 'index8_product' # 製品の達成度
  get 'products/index9' => 'products#index9', as: 'index9_product' # 全アイテムの日付一覧

  get 'products/download' => 'products#download', as: 'download_product'
  get 'products/doc_download' => 'products#doc_download', as: 'doc_download_product'

  get 'products/process_design_download' => 'products#process_design_download', as: 'process_design_download'

  root to: 'products#top'
  
  resources :products 
  
  



       
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


