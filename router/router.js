const { send } = require("process")

async function Router(fastify){

    fastify.get('/demo', async (req,res) => {
        res.status(200).send({Hello:"Himanshu"})
    })
}

module.exports = Router;