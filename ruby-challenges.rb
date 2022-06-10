# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
# letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# def sing_letter(array, letter)
#     empty_arr = []
#      array.map do |value|
#      if value.include?(letter)
#         empty_arr.push(value)
#      end
#      end
#      empty_arr
# end
    
# p sing_letter(beverages_array, letter_o)
# p sing_letter(beverages_array, letter_t)
# --> ["coffee", "soda water"]
# --> ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

# nums_array1 = [42, 7, 27]
# # Expected output: 76

# nums_array2 = [25, 17, 47, 11]
# # Expected output: 100

# def sum array
#     array.sum
# end

# p sum nums_array1
# p sum nums_array2

# Output
# 76
# 100


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# class Bike 
#     attr_accessor :current_speed

#     def initialize(model_param, wheels_param = 2, current_speed_param = 0 )
#         @model = model_param
#         @wheels = wheels_param
#         @current_speed = current_speed_param
    
#     end

#     def bike_info
#         "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
#     end   

#     def pedal_faster num 
#         @current_speed = current_speed + num
#     end

#     def brake num 
#         @current_speed = current_speed - num
#         if @current_speed < 0 
#             @current_speed = 0
#         end
#     end
# end

# bmx = Bike.new('BMX')
# p bmx.bike_info
# # Output
# # "The BMX bike has 2 wheels and is going 0 mph."

# # -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# # Expected output example: my_bike.pedal_faster(10) => 10

# bmx.pedal_faster 10
# # p bmx.current_speed
# # --> 10

# # Expected output example: my_bike.pedal_faster(18) => 28

# bmx.pedal_faster 18
# # p bmx.current_speed
# # --> 28

# # Expected output example: my_bike.brake(5) => 23

# bmx.brake 5
# # p bmx.current_speed
# # --> 23

# # Expected output example: my_bike.brake(25) => 0

# bmx.brake 25
# p bmx.current_speed
# # --> 0