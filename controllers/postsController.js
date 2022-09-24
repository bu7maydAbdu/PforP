const express = require("express")
const mongoose = require("mongoose")
const Post = require("../models/Post")


module.exports = {
    getProfile: async (req, res)=> {
          res.render("profile.ejs")
    },
    
    getPostsFeed : async(req, res)=>{
        const posts = await Post.find()
        // console.log(posts)
             res.render("feed.ejs", {posts : posts})
             console.log("getting feed")
    },
    createPost : async (req,res) => {

        try { 
            // console.log(req.user)
            console.log(req.body)
            //  await Post.create({
            //     postText : req.body.content,
            //     createdBy : req.user._id,
            //     userName : req.user.userName
            //     })

                console.log("post has been added!");
                res.redirect("/feed");

        }catch(err){
             console.log(err)
        }

    },
    getPost : async (req, res) => {
        try {
            const post = await Post.findById({_id : req.params.id}).lean()
            console.log(post)
             
            res.render("post.ejs", {post : post})
        // console.log(`getting post with id ${req.params.id}`)


        }catch(err){
            console.log(err)
        }
    }
}