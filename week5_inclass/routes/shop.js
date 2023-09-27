const express = require('express');
const router = express.Router();
const path = require('path')
const admindata = require("./admin")
router.get(  '/showProducts', (req, res, next) => {
    console.log( "------------------");
    console.log(admindata.products)
    res.sendFile( ( path.join(__dirname, '../views', 'showProducts.html')));
});
module.exports = router