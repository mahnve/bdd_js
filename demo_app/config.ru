require 'rubygems'
require 'bundler'

Bundler.require(:default)

require './demo_app'

set :views, File.dirname(__FILE__) + '/views'
set :public, File.dirname(__FILE__) + '/public'
run Sinatra::Application
