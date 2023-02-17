import React , {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const ProductForm = (props) => {
    const navigate = useNavigate()
    const {allProducts, setAllProducts} = props
    const [product, setProduct] = useState({
        title: '',
        price: 0, 
        description:''
    })
    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
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
            })
    }
    return ( 
        <div className='d-flex justify-content-center'>
            <form className='row w-25 m-3' onSubmit={submitHandler} >
                <label>Product Title:</label>
                <input type="text" onChange={changeHandler} value={product.title} name='title'/>
                <label>Price:</label>
                <input type="number" onChange={changeHandler} value={product.price} name='price'/>
                <label>Product Description:</label>
                <input type="text" onChange={changeHandler} value={product.description} name='description'/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default ProductForm;