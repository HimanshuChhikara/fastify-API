// Auth middleware decorator

const fastifyPlugin = require('fastify-plugin');

module.exports = fastifyPlugin(async (fastify)=>{
    fastify.decorate('jwtauthentication', async(req,res) => {   
        try{
            await req.jwtVerify();
        }
        catch(err){
            res.send(err)
        }
    })
})