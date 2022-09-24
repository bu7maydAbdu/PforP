const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth.js")
const profileController = require("../controllers/profileController.js")
const { ensureAuth, ensureGuest } = require("../middleware/auth.js")

router.get("/:id", profileController.getProfile)


module.exports = router