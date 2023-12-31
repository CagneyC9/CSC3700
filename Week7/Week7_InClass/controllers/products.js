const adminData = require("../routes/admin");
const Product = require("../models/product")
let products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('addProduct', {
        from: 'addProduct'
    })
}

exports.postAddProduct = (req, res, next) => {
    let t = req.body.title;
    let a = req.body.author;
    let p = req.body.price
    const products = new Product(t, a, p);
    products.save()
    //Moving the product to another file
    // products.push({
    //     title: t,
    //     author: a,
    //     price: p
    // })
    res.redirect('/add-product')
}

exports.getProduct = ( req, res , next ) => {
    const products = Product.fetchAll()
    res.render( 'showProducts', {
        title: "Show Available Products",
        from: 'showProducts',
        products : products
    });
}