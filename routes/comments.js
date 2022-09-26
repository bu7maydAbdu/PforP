const express = require("express")
const router = express.Router()
const upload = require("../middleware/multer");
const postsController = require("../controllers/postsController.js")
const commentsController = require("../controllers/commentsConstroller")
const authController = require("../controllers/auth.js")
const { ensureAuth, ensureGuest } = require("../middleware/auth.js")


router.post("/createComment/:_id", commentsController.createComment)




module.exports = router