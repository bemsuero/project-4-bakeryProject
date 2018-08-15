# using SendGrid;s Ruby Library
# https://github.com/sendgrid/sendgrid-ruby
# require "sendgrid-ruby"
require "sinatra"
require "curb"
# include SendGrid


# def email
# from = Email.new(email: 'test@example.com')
# to = Email.new(email: 'test@example.com')
# subject = 'Sending with SendGrid is Fun'
# content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby')
# mail = Mail.new(from, subject, to, content)
#
# sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
# response = sg.client.mail._('send').post(request_body: mail.to_json)
# puts response.status_code
# puts response.body
# puts response.headers
# end

get '/' do
  erb :home
end

get '/search_results' do
  @search = params[:search_bar]
  erb :search_results
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

get '/contact_us' do
  erb :contact_us
end

get '/signup' do
  @first_name = params[:first_name]
  @last_name = params[:last_name]
  @email = params[:email]
  erb :signup
end

get '/events' do
  @res = params[:query]
  # @web_search = Curl::Easy.perform("https://www.eventbriteapi.com/v3/events/search/?token=F33FG3NCO5EPWSKXWJXF") #with images
  @web_search = Curl::Easy.perform("https://www.eventbriteapi.com/v3/events/search/?q=baking&location.address=new+york&token=#{ENV['API_TOKEN']}") # with search function
  @look_through = @web_search.body_str
  @data = JSON.parse(@look_through)
  @events = @data["events"]
  erb :events
end

$cookies = []
$muffins = []
$cakes = []

class BakeryTreat
  attr_accessor :name, :cost
  def initialize(name, cost)
    @name = name
    @cost = cost
    @description = "Food for Sale"
end

  def self.count
    return @@food_count
end
end

class Cookie < BakeryTreat
  attr_accessor :name, :cost, :calories, :image, :description
  def initialize(name, cost, calories, image, description)
    super(name, cost)
    @description = description
    @calories = calories
    @image = image
    $cookies << self
end
end

class Cake < BakeryTreat
    attr_accessor :name, :cost, :calories, :image, :description
  def initialize(name, cost, calories, image, description)
    super(name, cost)
    @description = description
    @calories = calories
      @image = image
    $cakes << self
  end
end

class Muffin < BakeryTreat
    attr_accessor :name, :cost, :calories, :image, :description
  def initialize(name, cost, calories, image, description)
    super(name, cost)
    @description = description
    @calories = calories
      @image = image
    $muffins << self
  end
end

@chocolate_chip = Cookie.new("Chocolate Chip Cookie", 2, 300, "/images/chocolate.jpg", "A rich and creamy chocolate chip cookie. Dipped in the finest chocolate sauce.")
@peanut_butter = Cookie.new("Peanut Butter Cookie", 2, 500, "/images/peanut.jpg", "Cookies baked with peanut butter then smothered in a peanut butter sauce.")
@butter_cookie = Cookie.new("Sugar Cookie", 2, 100, "/images/butter.jpg", "Grandma's Favorite! A simple classic.")
@ginger_bread = Cookie.new("Gingerbread Cookie", 2, 200, "/images/ginger.jpg", "Flavored with ginger, cloves, cinnamon and sweetened with honey, these cookies are out of this world!")

@chocolate_cake = Cake.new("Chocolate Chip Cake", 2, 300, "/images/chocolatecake.jpg", "Moist, delicious chocolate cake for any celebration.")
@peanut_butter_cake = Cake.new("Peanut Butter Cake", 2, 500, "/images/peanutcake.jpg", "Very moist and fluffy! The flavors are the perfect blend of chocolate, bananas, and Nutella. Scrumptious!")
@lemon_buttermilk_cake = Cake.new("Lemon Buttermilk Pound Cake", 2, 100, "/images/buttercake.jpg", "This is not your daughter's cake. No triple-threat chocolate, caramel, salted, nouveau let-it-sit-for-a-day-so-the-flavor a-can-blend cake here. This is simply a fabulous old-school cake, with the perfect moistness and density of a pound-cake-gone-right.")
@ginger_bread_cake = Cake.new("Gingerbread Cake", 2, 200, "/images/gingercake.jpg", "This is a wonderful, moist easy cake with perfect texture. It's so nice to have a festive winter dessert that doesn't take butter. The glaze over the warm cake is the perfect touch.")

@chocolate_chip_muffin = Muffin.new("Chocolate Chip Muffin", 2, 300, "/images/chocolatemuffin.jpg", "These muffins are a chocolatey treat thanks to the double chocolate punch of cocoa powder and chocolate chips.")
@peanut_butter_muffin = Muffin.new("Peanut Butter Muffin", 2, 500, "/images/peanutmuffin.jpg", "Oat muffins with a hint of peanut butter, make a great on-the-go breakfast or snack.")
@mini_pumpkin_butterscotch_muffins = Muffin.new("Mini Pumpkin Butterscotch Muffin", 2, 100, "/images/buttermuffin.jpg", "These moist and deliciously-sweet pumpkin muffins are great for sharing, but you won't want to share! Don't let the pumpkin-butterscotch combination fool you, these taste great!")
@ginger_bread_muffin = Muffin.new("Gingerbread Muffin", 2, 200, "/images/gingermuffin.jpg", "Flavored with ginger, cloves, cinnamon and sweetened with honey, these muffins are out of this world!")
