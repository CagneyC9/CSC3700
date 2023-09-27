const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const path = require("path")
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.get('/showProducts', (req, res, next) => {
    res.sendFile( ( path.join(__dirname, 'public', 'showProducts.html')));
});

app.get('/add/product', (req, res, next) => {
    let h = "<html> <body>"
    let h2 = "<h2> Add New Product </h2>";
    let f = "<form action='/product' method='post'>";
    let inBox = "<input type='text' name='title'/>";
    let but = "<button type='submit'>Add Product</button>"
    let fe = "</form> </body></html>"
    res.send(`${h} ${h2} ${f} ${inBox} ${but} ${fe}`);
    res.send("<h2> Welcome Home Baby!</h2>")
    next();
})
app.post('/product', (req, res, next) => {
    let t = req.body.title;
    res.send(`Made it to post: title: ${t}`)
});
app.get('/', (req, res, next) => {
    res.send("It's a no good")
});
let port = 3001;
const server = http.createServer(app);
server.listen(port);
console.log(`Listening on http://localhost: ${port}`);