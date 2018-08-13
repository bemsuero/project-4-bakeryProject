# using SendGrid;s Ruby Library
# https://github.com/sendgrid/sendgrid-ruby
require "sendgrid-ruby"
require "sinatra"
include SendGrid


def email
from = Email.new(email: "test@example.com")
to = Email.new(email: "bemsuero@yahoo.com")
subject = "Sending with SendGrid is Fun"
content = Content.new(type: "text/plain", value: "and easy to do anywhere, even with Ruby")
mail = Mail.new(from, subject, to, content)

sg = SendGrid::API.new(api_key: ENV["SENDGRID_API_KEY"])
response = sg.client.mail._("send").post(request_body: mail.to_json)
puts response.status_code
puts response.body
puts response.headers
end

get '/' do
  erb :home
end

get '/cookies' do
  erb :cookies
end

get '/cakes' do
  erb :cakes
end

get '/muffins' do
  erb :muffins
end
