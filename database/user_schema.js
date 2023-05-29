const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const database1 = mongoose.Schema({
   name: {
    type: String,
  },
  
  password :{
    type:String
  },
  phone:{
    type:String
  },
  location:{
    type:String
  },
  isadvanced_user:{
    type : Boolean,
    default:false
  }
});
const userregis = mongoose.model("user", database1);

module.exports = userregis;
