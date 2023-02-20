import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams , Link, useNavigate} from 'react-router-dom'
const Product = ({socket}) => {
    const {id} = useParams()
    const nav = useNavigate()
    const [SingleProduct, setSingleProduct] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log('*******', res.data)
            setSingleProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const deleteHandler = () => {
        socket.emit('deleteProduct', id)
        nav('/')


        // axios.delete(`http://localhost:8000/api/products/${id}`)
        // .then((res) => {
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
    }

    return (
        <div>
            <h1>{SingleProduct.title}</h1>
            <p>Price: ${SingleProduct.price}</p>
            <p>Description: {SingleProduct.description}</p>
            <Link to={`/products/edit/${id}`} className='btn btn-warning'>Edit Product</Link>
            <button className='btn btn-danger' onClick={deleteHandler}>Delete Product</button>
        </div>
)}

export default Product;

