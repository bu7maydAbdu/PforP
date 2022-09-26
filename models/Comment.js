const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
commentText : {
    type : String,
    required : true
},
createdBy : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
},
post : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
},
userName : {
    type: String,
    required : true

},
upVote : {
    type : Number,
    required : true,
},
createdAt: {
    type: Date,
    default: Date.now,
  }

  
})

module.exports = mongoose.model("Comment", commentSchema)