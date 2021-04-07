const mongoose = require('mongoose')
const Router = require('./router/router')
const fastify = require('fastify')({
    logger: true
  })
fastify.listen(3000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})

//DB Connection

mongoose.connect('mongodb://localhost/')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

fastify.register(Router);
  
fastify.get('/user', async (request, response) => {
    response.status(200).send({helo:"heelo there"})
  })
  
  
