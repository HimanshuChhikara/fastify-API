const boom = require('boom');
const Users = require('../models/users');

//User JWT
exports.validateUser = async function authUser(fastify){
  fastify.post('/users/v1/generateAccessToken',async (req,res) => {
      try{
          const {name,email,secret} = req.body
          if(!name || !email){
              res.status(400).send({error: true,msg:"Name and Email are Mandatory"});
              return
          }
          //DB Check 
          // let userData = await db.Users.find({})

          const token = fastify.jwt.sign({name,email,secret}, {expiresIn: 86400})
          res.status(200).send({token,email})  
      }
      catch(err){
          throw boom.boomify(err)
      }
      
  })
},

//add User
exports.addUser = async (req,res) => {
  try{
    const users = new Users(req.body)
    return users.save()
  }
  catch(err){
    console.error(err);
  }
},

//Update User
exports.updateUser = async (req, reply) => {
  try {
    const id = req.params.id
    const Users = req.body
    const { ...updateData } = users
    const update = await Users.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
},

//Delete User
exports.deleteUser = async (req, reply) => {
  try {
    const id = req.params.id
    const users = await Users.findByIdAndRemove(id)
    return users
  } catch (err) {
    throw boom.boomify(err)
  }
}