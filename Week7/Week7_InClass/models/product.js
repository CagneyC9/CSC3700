const products = [];

//Defines how to construct the class
module.exports = class Product {
    constructor(t, a, p) {
        this.title = t;
        this.author = a;
        this.price = p;
    }
    save(){
        //Refers to current object (Input data)
        products.push( this );
    }
    static fetchAll() {
        return products;
    }
}