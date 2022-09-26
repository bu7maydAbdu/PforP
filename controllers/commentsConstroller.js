const Comment = require("../models/Comment")



module.exports = {
    
   createComment : async (req, res) => {
    try {

        console.log(req.body)
        await Comment.create({
            commentText : req.body.commentText,
            createdBy : req.user._id,
            post : req.params._id,
            userName : req.user.userName,
            upVote : 0
              })
        res.redirect(`/post/${req.params._id}`)
    }catch(err){
        console.log(err)
    }
     
   }
}