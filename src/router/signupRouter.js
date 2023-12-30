const express = require("express")

const router = express.Router()
// const userDatas =[]

const {signupget,signuppost} = require("../controller/controller")
const validating = require("../middlewares/authMidddleware")

router.get("/", signupget)

router.post("/",validating,signuppost)

module.exports = router;