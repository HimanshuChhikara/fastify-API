const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({

  type : {
    type:String,
    required:true
  },
  macAddress : {
    type: String,
    required : true
  },
  ipAddress : {
    type: String,
    required :  true
  },
  owner : {
    type : String,
    required : true
  },

  createAt : {
    type: Date, 
    default: Date.now
  },
  updatedAt : {
    type : Date,
  }
})

module.exports = mongoose.model('Device', deviceSchema)