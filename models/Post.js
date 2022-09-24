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
sector: {
    type: String,
    default: 'general',
    enum: ['general', 'health', 'tech']
  },
  image: {
    type: String
  },
  cloudinaryId: {
    type: String
  }
  
})

module.exports = mongoose.model("Post", postSchema)