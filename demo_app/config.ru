require 'rubygems'
require 'bundler'

Bundler.require

require './demo_app'
run Sinatra::Application
