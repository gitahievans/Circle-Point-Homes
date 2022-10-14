# puts "Seeding..."

# User.create(name email bio password_digest )



puts "Seeding..."

10.times do 
    User.create(
        name: Faker::Name.name, 
        email:Faker::Internet.email, 
        bio:Faker::Lorem.sentence,  
        password_digest:Faker::Lorem.words, 
        user_type: rand(0..1)
        )
end
House.create(
    location:Faker::Nation.capital_city, 
    description:Faker::Lorem.sentence,
    image_url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    user_id: 1
    )

puts "Done seeding..."