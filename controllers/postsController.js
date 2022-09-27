const cloudinary = require("../middleware/cloudinary")
const Post = require("../models/Post")
const Comment = require("../models/Comment")



module.exports = {
    getProfile: async (req, res)=> {
          res.render("profile.ejs")
    },
    
    getPostsFeed : async(req, res)=>{

        const posts = await Post.find()
        console.log(req.user.id)
       
             res.render("feed.ejs", {posts : posts , user : req.user})
             console.log("getting feed")
    },
    createPost : async (req,res) => {

        try { 
            // console.log(req.user)
            console.log(req.body)
            const result = await cloudinary.uploader.upload(req.file.path)

             await Post.create({
                title : req.body.titleinput,
                postText : req.body.content,
                createdBy : req.user._id,
                userName : req.user.userName,
                postType : req.body.postType,
                sector : req.body.sector,
                image: result.secure_url,
                cloudinaryId: result.public_id
                })

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

            console.log(comments)
             
            res.render("post.ejs", {post : postFound , comments : comments})
        // console.log(`getting post with id ${req.params.id}`)


        }catch(err){
            console.log(err)
        }
    },
    getVolunteers : async (req, res) => {

        try {

            console.log("getting volunteers")
        const volunteersPosts = await Post.find({postType : "volunteer"})
        console.log(volunteersPosts)


          

        }catch(err){
            console.log(err)
          
        }

       

    }
}