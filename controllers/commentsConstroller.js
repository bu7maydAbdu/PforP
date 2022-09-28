const Comment = require("../models/Comment")
const ProfileInfo = require("../models/ProfileInfo")




module.exports = {
    
   createComment : async (req, res) => {
    try {
        const profileInfos = await ProfileInfo.findOne({user : req.user.id}).lean()
            
        console.log(req.body)
        await Comment.create({
            commentText : req.body.commentText,
            createdBy : req.user._id,
            post : req.params._id,
            userName : req.user.userName,
            profilePic : profileInfos.profilePic,
            upVote : 0
              })
        res.redirect(`/post/${req.params._id}`)
    }catch(err){
        console.log(err)
    }
     
   }
}