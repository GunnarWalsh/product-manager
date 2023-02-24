const { response } = require('express')
const Product = require('../models/product')

module.exports = {
//Create
    createProduct: (req,res) => {

        Product.create(req.body)
            .then((newProduct) => {
                res.json(newProduct)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error: err})
            })
    },
    
//Read
    allProducts: (req,res) => {
        Product.find()
            .then((allProducts) => {
                res.json(allProducts)
                
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error: err})
            })
    },
    oneProduct: (req,res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) => {
                res.json(oneProduct)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error: err})
            })
    },
//Update
    updateProduct:(req,res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedProduct => {
            res.json(updatedProduct)
        })
        .catch((err) => {
            res.status(500).json({message: 'Something went wrong', error: err})
        })
    },
//Delete
    deleteProduct:(req,res) => {
        Product.deleteOne({_id: req.params.id})
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error: err})
            })
    }
}