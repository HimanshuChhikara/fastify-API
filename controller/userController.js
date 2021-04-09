const User = require('../models/users');
const boom = require('boom');
const JWT = require('fastify-jwt');
const fastify = require('fastify');


fastify.register(JWT, Object.assign(
  {},
  { secret: process.env.JWT_SECRET },
  opts.auth
))

exports.getUser = async (req,res) => {
  try{
    const user = await User.find()
    res.status(200).send({message:"Sucess",user:user})
  }
  catch(err){
    throw boom.boomify(err)
  }
},

//Using middleware for auth
fastify.register(require('./middleware/auth_middleware'));
//Generating Token 
exports.addUserToken = async (fastify) => {
fastify.post('/addUser/V1/generateAccessToken',async (req,res) => {
  try{
    const {name,email,secret} = req.body;

    if(!name || !email || !secret){
      res.status(400).send({error: true,msg:"Mandatory Fields are required"})
    }
    const token = fastify.JWT.sign({name,email,secret},{expiresIn: 86400});
    res.status(200).send({token,name,email});
  }
  catch(err){
    throw boom.boomify(err);
  }
})
},
exports.addUser = async (req,res) => {
  try{
    
    const user = new User(req.body)
    const token = JSON.parse(res.body).token

    return (user.save(),{token, inject});
    res.status(200).send({message:"Success",user:user})
  }
  catch(err){
    throw boom.boomify(err)
  }
},

exports.updateUser = async (req,res) => {
  try{
  const id = req.params.id
  const user = req.body
  const { ...updateData } = user
  const update = await User.findByIdAndUpdate(id, updateData, { new: true })
  return update
  }
   catch (err) {
    throw boom.boomify(err)
  }
},

exports.deleteUser = async (req, reply) => {
  try {
    const id = req.params.id
    const user = await User.findByIdAndRemove(id)
    return user
  } catch (err) {
    throw boom.boomify(err)
  }
}