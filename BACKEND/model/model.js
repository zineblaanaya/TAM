const mongoose = require('mongoose');

// Ajout plugin pour unique mail
const muv = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
    firstName :{type:String,required:true},
    lastName :{type:String,required:true},
    email :{type:String,required:true,unique:true},
    password :{type:String,required:true},
    // date :{type:Date,defautlt:Date.now}
  })



  mongoose.plugin(muv)



  let Users = mongoose.model('User', userSchema)
  module.exports=Users