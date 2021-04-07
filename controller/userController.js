
const Users = require('../models/users');

exports.addUser = async (req,res) => {
  try{
    const users = new Users(req.body)
    return users.save()
  }
  catch(err){
    console.error(err);
  }
}