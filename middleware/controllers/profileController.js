const express = require("express")
const User = require("../models/User")


module.exports = {
    getProfile : async (request, response) => {
        console.log(request.params)
        const profile = await User.findById({_id : request.params.id})
        console.log(profile)
        response.render("profile.ejs" , {profile : profile})
    }
}