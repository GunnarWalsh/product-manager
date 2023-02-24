import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client'

const ProductHome = ({socket}) => {
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
    }, [])


    socket.on('deleteProduct', (deletedId) => {
        setAllProducts(allProducts.filter((product) => product._id !== deletedId))
    });

    return (
        <div>
            <h2>All Products</h2>
            {
                allProducts.map((product) => (
                    <div className='m-3' key={product.id}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                    </div>

                ))
            }
        </div>
    )
}

export default ProductHome;
