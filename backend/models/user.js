const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  name: {type: String , require:true},
  contact: {type: String , require:true},
  nic: {type: String , require:true},
  email: {type: String , require:true} ,
  password: {type: String , require:true},
  role: {type: String , require:true},
  dateTime: {type: Date, default: Date.now , require:false}
});


module.exports = mongoose.model('User',userSchema);
