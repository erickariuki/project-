ENV['RACK_ENV'] ||= "development"
require 'bundler/setup'
Bundler.require(:default, ENV['RACK_ENV'])
# require_relative "../app/api/user.rb"
# require_relative "../app/api/car.rb"
# require_relative "../app/api/application.rb"

require_all 'app'