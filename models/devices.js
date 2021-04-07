const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
  type: String,
  macAddress: String,
  ipAddress: String,
  owner: Number,
  createdAt: Date,
  updatedAt: Date
})

module.exports = mongoose.model('Device', deviceSchema)