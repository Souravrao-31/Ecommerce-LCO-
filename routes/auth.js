var express = require('express')
var router = express.Router()


router.get('/signout', (res,seq) => {
    res.send("All about signout........");
})

module.exports = router;