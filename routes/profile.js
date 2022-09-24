const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth")
const profileController = require("../controllers/profileController")
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.get("/:id", profileController.getProfile)


module.exports = router