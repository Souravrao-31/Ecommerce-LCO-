var express = require('express')
var router = express.Router()

const {signout} = require('../controllers/auth')
const {signup} = require('../controllers/auth')

router.post("/signup", signup)  //from controller
router.get("/signout", signout) //routes on controllers

module.exports = router;