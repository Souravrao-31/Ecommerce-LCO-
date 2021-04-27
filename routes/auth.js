var express = require('express')
var router = express.Router()

const {signout, signup} = require('../controllers/auth')

const {check}   = require('express-validator');

router.post("/signup", [
    check("name", "Should be atleast 3 character ").isLength({ min: 3 }),
    check("email", "Email is not valid ").isEmail(),
    check("password", "Password is Required ").isLength({ min: 4})
], signup)  //from controller
router.get("/signout", signout) //routes on controllers

module.exports = router;