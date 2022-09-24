const express = require("express")
const router = express.Router()
const postsController = require("../controllers/postsController")
const authController = require("../controllers/auth")
const { ensureAuth, ensureGuest } = require("../middleware/auth")


router.get("/:id", postsController.getPost)
router.post("/createPost",ensureAuth, postsController.createPost)



module.exports = router