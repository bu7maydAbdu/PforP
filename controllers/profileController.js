const express = require("express")
const User = require("../models/User")
const Post = require("../models/Post")




module.exports = {
    getProfile : async (request, response) => {
        console.log(request.params)
        const profile = await User.findById({_id : request.params.id})
        const posts = await Post.find({ createdBy: request.params.id})
        console.log(profile)
        console.log(posts)
        response.render("profile.ejs" , {profile : profile, user : request.user, posts :posts})
    }
}