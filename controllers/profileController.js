const cloudinary = require("../middleware/cloudinary")
const express = require("express")
const User = require("../models/User")
const Post = require("../models/Post")
const ProfileInfo = require("../models/ProfileInfo")




module.exports = {
    getProfile : async (request, response) => {
        console.log(request.params)
        const myProfileInfos = await ProfileInfo.findOne({user : request.user.id}).lean()
        const profile = await User.findById({_id : request.params.id})
        if (profile) {

            const profileInfos = await ProfileInfo.find({user : request.params.id}).lean()
        const posts = await Post.find({ createdBy: request.params.id})
        console.log(profile)
        // console.log(posts)
        response.render("profile.ejs" , {profile : profile, user : request.user, posts :posts , profileInfos : profileInfos, myProfileInfos : myProfileInfos})

        }else {

    response.render("profileNotFound.ejs",  {user : request.user,   myProfileInfos : myProfileInfos})


        }
        
    },
    getInfoUpload : async (req, res) => {
        try{

        

            res.render("profileInfo.ejs")

        }catch(err){
            console.log(err)
        }
    },

    postInfo : async (req, res) => {
        try{
            
                 console.log(req.user)
                 console.log(req.body)
             console.log(req.file)

              const result = await cloudinary.uploader.upload(req.file.path)

            await ProfileInfo.create({
                profilePic: result.secure_url,
                cloudinaryId: result.public_id,
                user : req.user._id,
                skills : req.body.skills,
                interests : req.body.interests,
            
                })
               console.log("profile info added")
                res.redirect("/feed");

               
        }catch(err){
            console.log(err)
        }
       
    }
}