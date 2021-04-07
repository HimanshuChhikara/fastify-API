

async function Router(fastify){
  fastify.get('/users',async (req,res) => {
    preValidatation: [ fastify.jwtauthentication]
    res.status(200).send({message:"Sucessfully Authorized"})
  })
}

module.exports = Router