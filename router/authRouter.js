
const boom = require('boom');
async function authRouter(fastify){
    fastify.post('/users/v1/generateAccessToken',async (req,res) => {
        try{
            const {name,email,secret} = req.body
            if(!name || !email){
                res.status(400).send({msg:"Name and Email are Mandatory"});
                return
            }
            
        }
        catch(err){
            throw boom.boomify(err)
        }
        
    })
  }
  
  module.exports = authRouter