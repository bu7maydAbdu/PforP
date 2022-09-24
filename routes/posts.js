const express = require("express")
const router = express.Router()
const postsController = require("../controllers/postsController.js")
const authController = require("../controllers/auth.js")
const { ensureAuth, ensureGuest } = require("../middleware/auth.js")


router.get("/:id", postsController.getPost)
router.post("/createPost",ensureAuth, postsController.createPost)



module.exports = router