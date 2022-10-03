const cloudinary = require("../middleware/cloudinary")
const Post = require("../models/Post")
const Comment = require("../models/Comment")
const User = require("../models/User")
const ProfileInfo = require("../models/ProfileInfo")





module.exports = {
    getProfile: async (req, res)=> {
          res.render("profile.ejs")
    },
    
    getPostsFeed : async(req, res)=>{
        const profileInfos = await ProfileInfo.findOne({user : req.user.id}).lean()
        
        const posts = await Post.find()
        
        console.log(req.user.id)
       
             res.render("feed.ejs", {posts : posts , user : req.user , profileInfos : profileInfos})
             console.log("getting feed")
    },
    createPost : async (req,res) => {

        try { 
            console.log(req.user)
            console.log(req.body)
            if(req.file){

            const result = await cloudinary.uploader.upload(req.file.path)
            const profile = await ProfileInfo.findOne({user : req.user._id})

            await Post.create({
                title : req.body.titleinput,
                postText : req.body.content,
                createdBy : req.user._id,
                userName : req.user.userName,
                profilePic : profile.profilePic,
                postType : req.body.postType,
                sector : req.body.sector,
                image: result.secure_url,
                cloudinaryId: result.public_id
                })

            } else {

                const profile = await ProfileInfo.findOne({user : req.user._id})
                console.log(profile)
   
   
                await Post.create({
                   title : req.body.titleinput,
                   postText : req.body.content,
                   createdBy : req.user._id,
                   userName : req.user.userName,
                   profilePic : profile.profilePic,
                   postType : req.body.postType,
                   sector : req.body.sector,
                   })


            }
           
             

                console.log("post has been added!");
                res.redirect("/feed");

        }catch(err){
             console.log(err)
        }

    },
    getPost : async (req, res) => {
        try {
            console.log(req.params)

            const comments = await Comment.find({post : req.params.id}).lean()
            const postFound = await Post.findById({_id : req.params.id}).lean()
            const profileInfos = await ProfileInfo.findOne({user : req.user.id}).lean()
              console.log(profileInfos)

            console.log(comments)
             
            res.render("post.ejs", {post : postFound , comments : comments , user : req.user, profileInfos : profileInfos})
        console.log(`getting post with id ${req.params.id}`)


        }catch(err){
            console.log(err)
        }
    },
    deletePost: async (req, res) => {
        try {
          let post = await Post.findById({ _id: req.params.id });
          
          await cloudinary.uploader.destroy(post.cloudinaryId);

          await Post.remove({ _id: req.params.id });
          console.log("Deleted Post");
          res.redirect("/profile");
        } catch (err) {
          res.redirect("/profile");
        }
      },
    getVolunteers : async (req, res) => {

        try {

            console.log("getting volunteers")
        const volunteersPosts = await Post.find({postType : "volunteer"})
        console.log(volunteersPosts)
        const profileInfos = await ProfileInfo.findOne({user : req.user.id}).lean()


        if(!volunteersPosts){
             
            res.render("postsNotFound.ejs" , { user : req.user , profileInfos : profileInfos})

        }
           

        res.render("volunteersPosts.ejs" , {volunteersPosts : volunteersPosts, user : req.user, profileInfos : profileInfos})

          

        }catch(err){
            console.log(err)
          
        }

       

    },

    getSearchers : async (req, res) => {
        const searchersPosts = await Post.find({postType : "searcher"})
        const profileInfos = await ProfileInfo.findOne({user : req.user.id}).lean()

        console.log(searchersPosts)
           

        res.render("searchersPosts.ejs" , {searchersPosts : searchersPosts, user : req.user , profileInfos : profileInfos})
    }
}