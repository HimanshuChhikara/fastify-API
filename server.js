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
//JWT
fastify.register(require('fastify-jwt',{
  secret: "test@#1234",

}))
//DB Connection

mongoose.connect('mongodb://localhost/',{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

fastify.register(Router);

fastify.register(require('./middleware/auth_middleware'));
fastify.register(require('./router/authRouter'))

fastify.register(
  require('./router/router'),
)
  
fastify.get('/user', async (request, response) => {
    response.status(200).send({helo:"heelo there"})
  })
  
  
