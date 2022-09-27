const mongoose = require("mongoose")

const userInfoSchema = new mongoose.Schema({
    profilePic : { 
        type: String,
        required : true
     },
    skills: { 
        type: String
    
    },
    interests:{
       type : String
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    
  });

module.exports = mongoose.model("ProfileInfo", userInfoSchema)
