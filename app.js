const express = require("express")
require("dotenv").config()
const session = require("express-session")
// const path = require("path")
// const port = 7000
const port = process.env.PORT || 7000
const secret = process.env.SECRET 
const app = express()
const loginRouter = require('./src/router/loginRouter')
const signupRouter = require("./src/router/signupRouter")
const homeRouter = require("./src/router/homeRouter")
const logoutRouter = require("./src/router/logoutRouter")

app.use(session({
    secret:secret,
    resave:true,
    saveUninitialized: false
}))

const nocache = require("nocache")
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use(nocache())

app.set("view engine","ejs")
app.set("views","./src/views")


app.use("/login",loginRouter)
app.use("/signup",signupRouter)
app.use("/logout",logoutRouter)
app.use("/",homeRouter)



app.listen(port,()=>{
    console.log("server started...!",port);
})