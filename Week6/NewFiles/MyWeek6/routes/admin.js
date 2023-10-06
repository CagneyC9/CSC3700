const express = require('express');
const router = express.Router();
const path = require('path');
let products = [];
router.get('/add-product', (req, res, next) => {
    res.render('addProduct',
        {
            from: 'addProduct'
        })
});
router.post('/product', (req, res, next) => {
    // console.log( req );
    console.log("----flag")
    let t = req.body.Title;
    let a = req.body.Author;
    let b = req.body.Price;
    products.push(
        {
            Title: t,
            Author: a,
            Price: b
        })
    res.redirect('/add-product')
    res.send(`Made it to post title:${t}``Made it to post Author:${a}``Made it to post title:${b}`);
});

// module.exports = router;
exports.products = products;
exports.routes = router;