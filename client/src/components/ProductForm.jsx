import React from 'react';

const ProductForm = (props) => {
    return ( 
        <div>
            <form className='row w-25 m-3'>
                <label>Product Title:</label>
                <input type="text" />
                <label>Price:</label>
                <input type="number" />
                <label>Product Description:</label>
                <input type="text" />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default ProductForm;