# fastify-API
A application with basic REST API running in nodejs and fastify

Fastify REST API with jwt authentication

      1. Use JWT for authentication
      2. Api should provide CRUD functionality for the following collections - Users and Devices
      3. Api should provide endpoints for login and logout
      4. Api should provide endpointa for getting devices by owner.
      5. Users can only see the devices they own.
      6. Should implement eslint rules
      
      
      use nodemon to start the server
      
      API End Points 
     
     Get all the users
     METHOD : GET 
     URL : /getUser
     
     Add User  with JWT
     METHOD : POST
     URL: /addUser/V1
     
     Add device 
     METHOD : POST 
     URL : /addDevice
     
     Get All device
     
     METHOD : GET
     URL : /getDevice
     
