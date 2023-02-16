import React, {useState, useEffect} from 'react';
import axios from 'axios'

const ProductHome = (props) => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((allProducts) => {
                setAllProducts(allProducts.data)
                // console.log(allProducts.data)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    return (
        <div>
            {
                allProducts.map((product) => (
                    <div>
                        <p>Product Title: {product.title}</p>
                        <p>Product Price: ${product.price}</p>
                        <p>Product Description: {product.description}</p>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default ProductHome;