const express = require("express")
const router = express.Router()
// const fs = require("fs")
// const userdata = JSON.parse(fs.readFileSync("./models/userdata.json", "utf-8"))

const {loginget,loginpost}=require("../controller/controller")


router.get("/",loginget)

router.post("/",loginpost) 

module.exports = router;