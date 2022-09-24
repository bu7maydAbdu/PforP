const { application } = require("express")
const express = require("express")
const router = express.Router()
const main = require("../controllers/mainController")
// const postsController = require("../controllers/postsController")
// const authController = require("../controllers/auth")
// const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.get("/", main.getMain)
// router.get("/feed", ensureAuth, postsController.getPostsFeed)
// router.get("/login", authController.getLogin)
// router.get("/signup", authController.getSignup)
// router.post("/signup", authController.postSignup)





module.exports = router


