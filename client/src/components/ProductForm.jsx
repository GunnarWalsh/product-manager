import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const ProductForm = (props) => {
    const navigate = useNavigate()
    const { allProducts, setAllProducts } = props
    const [errors, setErrors] = useState({})
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })
    const changeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        e.target.reset()
        axios.post('http://localhost:8000/api/products', product)
            .then((res) => {
                setProduct([...allProducts, product])
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                console.log(err.response.data.error.errors);
                setErrors(err.response.data.error.errors);
            })
    }
    return (
        <div className='d-flex justify-content-center'>
            <form className='row w-25 m-3' onSubmit={submitHandler} >
                <h1>Project Manager</h1>
                <label className='form-label'>Product Title:</label>
                <input className='form-control' type="text" onChange={changeHandler} value={product.title} name='title' />
                {
                    errors.title?
                    <p className='text-danger'>{errors.title.message}</p>:
                    null
                }
                <label>Price:</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">$</div>
                        </div>
                        <input className="form-control" type="number" onChange={changeHandler} value={product.price} name='price' />
                        {
                            errors.price?
                            <p className='text-danger'>{errors.price.message}</p>:
                            null
                        }
                    </div>
                <label>Product Description:</label>
                <input type="text" onChange={changeHandler} value={product.description} name='description' className='mb-2' />
                {
                    errors.description?
                    <p className='text-danger'>{errors.description.message}</p>:
                    null
                }
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}
export default ProductForm;