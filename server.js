const mongoose = require('mongoose')
const routes = require('./router/router')
const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
}),

routes.forEach((route, index) => {
  fastify.route(route)
}),


// Connect to DB
mongoose.connect('mongodb://localhost:27017/task',{ useUnifiedTopology: true,useNewUrlParser: true })
 .then(() => console.log("MongoDB connected…"))
 .catch(err => console.log(err))

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()