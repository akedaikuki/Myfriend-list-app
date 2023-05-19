const mongoose = require('mongoose')
const Schema = mongoose.Schema
const friendSchema = new Schema({
  id: {
    type: Number,
    required: false
  },
  natureImageUrl: {
    type: String, 
    required: true 
  },
  avatarUrl: {
    type: String, 
    required: true 
  }, 
  name: {
    type: String, 
    required: true 
  },
  email: {
    type: String, 
    required: true 
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    address: {
      type: String, 
      required: false   
    },
    city: {
      type: String, 
      required: false   
    },
    state: {
      type: String, 
      required: false   
    },
    zip: {
      type: String, 
      required: false  
    },
  },
  jobTitle: {
    type: String, 
    required: false 
  },
  company: {
    type: String, 
    required: false 
  },
})
module.exports = mongoose.model('Friend', friendSchema)