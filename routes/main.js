const { application } = require("express")
const express = require("express")
const router = express.Router()
const main = require("../controllers/mainController.js")
const postsController = require("../controllers/postsController.js")
const authController = require("../controllers/auth.js")
const { ensureAuth, ensureGuest } = require("../middleware/auth.js")

router.get("/", main.getMain)
router.get("/feed", ensureAuth, postsController.getPostsFeed)
router.get("/login", authController.getLogin)
router.post("/login", authController.postLogin)
router.get("/signup", authController.getSignup)
router.post("/signup", authController.postSignup)
router.get("/logout", authController.logout);





module.exports = router


