const productController = require('../controllers/product.controller');

module.exports = app => {
    //Create
    app.post('/api/products', productController.createProduct)
    //Read
    app.get('/api/products', productController.allProducts)
    app.get('/api/products/:id', productController.oneProduct)
    //Update
    app.put('/api/products/:id', productController.updateProduct)
    //Delete
    app.delete('/api/products/:id', productController.deleteProduct)

}