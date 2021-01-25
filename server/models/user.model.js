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
   confirmed: {
    type: Boolean,
    default: false
  }

 },
   {
     timestamps:true,
   }
); 

const user = mongoose.model('user',userSchema);
module.exports = user;