const express = require("express")
const router = express.Router()
const upload = require("../middleware/multer");
const postsController = require("../controllers/postsController.js")
const authController = require("../controllers/auth.js")
const { ensureAuth, ensureGuest } = require("../middleware/auth.js")


router.get("/:id", postsController.getPost)
router.post("/createPost",upload.single("file"), postsController.createPost)






module.exports = router