const Device = require('../models/devices');
const boom = require('boom');

exports.getDevice = async  (req,res) => {
    try{
        const device = await Device.find()
        res.status(200).send({message:"Sucess",data:device})
    }
    catch(err){
        throw boom.boomify(err)
    }
},


exports.addDevice = async (req,res) =>{
    try{
        const newDevice = new Device({ ...req.body });
        return newDevice.save();
        res.status(200).send({message:"success",data:newDevice});
    }
    catch(err){
        throw boom.boomify(err)
    }
}

exports.updateDevice = async (req,res) => {
    try{
    const id = req.params.id
    const device = req.body
    const { ...updateData } = device
    const update = await Device.findByIdAndUpdate(id, updateData, { new: true })
    return update
    }
     catch (err) {
      throw boom.boomify(err)
    }
  },
  
  exports.deleteDevice = async (req, reply) => {
    try {
      const id = req.params.id
      const device = await Device.findByIdAndRemove(id)
      return device
    } catch (err) {
      throw boom.boomify(err)
    }
  }