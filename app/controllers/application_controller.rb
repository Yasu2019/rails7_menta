class ApplicationController < ActionController::Base
  before_action :authenticate_user!  #追加
end
