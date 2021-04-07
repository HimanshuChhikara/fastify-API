

async function Router(fastify){
  fastify.get('/users',async (req,res) => {
    res.status(200).send({Hello:"Sucess"})
  })
}

module.exports = Router