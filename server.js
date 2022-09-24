const express = require('express')
const cors = require("cors")
const PORT = 8000
const mongoose = require("mongoose")
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const methodOverride = require("method-override")
const flash = require('express-flash')
const multer  = require('multer')
require('dotenv').config({path: './config/.env'})
const main = require("./routes/main")
const postsRoute = require("./routes/posts")
const profilesRoute = require("./routes/profile.js")
const connectDB = require("./config/database")

require('./config/passport')(passport)


const app = express()
app.use(cors())

connectDB()




app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Use forms for put / delete
app.use(methodOverride("_method"));



Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({mongoUrl:process.env.DB_STRING})
    })
  )
  


// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())





app.use("/", main)
// app.use("/post", postsRoute)
// app.use("/profile", profilesRoute)










app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})