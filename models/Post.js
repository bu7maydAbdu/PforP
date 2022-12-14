const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
postText : {
    type : String,
    required : true
},
createdBy : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
},
userName : {
    type: String,
    required : true

},
profilePic : { 
  type: String,
  required : true
},
sector: {
    type: String,
    default: 'general',
    enum: ['general', 'health', 'tech']
  },
  
postType: {
    type: String,
    default: 'volunteer',
    enum: ['volunteer', 'searcher']
  },
  image: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  promotes : {
    type : Number,
    required : true,
}

})

module.exports = mongoose.model("Post", postSchema)