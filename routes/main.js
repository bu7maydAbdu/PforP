const { application } = require("express")
const express = require("express")
const router = express.Router()
const upload = require("../middleware/multer");
const main = require("../controllers/mainController.js")
const postsController = require("../controllers/postsController.js")
const authController = require("../controllers/auth.js")
const { ensureAuth, ensureGuest } = require("../middleware/auth.js")
const mainController = require("../controllers/mainController.js")
const profileController = require("../controllers/profileController")

router.get("/", main.getMain)
router.get("/feed", ensureAuth, postsController.getPostsFeed)
router.get("/login", authController.getLogin)
router.post("/login", authController.postLogin)
router.get("/signup", authController.getSignup)
router.post("/signup", authController.postSignup)
router.get("/getInfoUpload", ensureAuth, profileController.getInfoUpload)
router.post("/postProfileInfo",upload.single("file"), profileController.postInfo)
router.get("/logout", authController.logout);
router.get("/volunteers", postsController.getVolunteers )








module.exports = router


