const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:{
    type:String,
    required:true
  },
   username:{
    type:String,
    required:true
   },
   password:{
    type:String,
    minlength:8,  
    required:true
   },
   pending:{
     type:Boolean,
     default:false
   },
   isConfirmed: {
    type: Boolean,
    default: false
  },
  secretCode:{
    type: Number,
    expires:600, //10 min

  }

 },
   {
     timestamps:true,
   }
); 

const user = mongoose.model('user',userSchema);
module.exports = user;