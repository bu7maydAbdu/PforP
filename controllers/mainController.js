const express = require("express")


module.exports = {
    getMain : async (request, response) => {
        response.render("index.ejs")
    }
}