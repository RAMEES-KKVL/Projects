const express = require("express")
const router = express.Router()

const {logout} = require("../controller/controller")

router.get("/",logout)

module.exports = router;