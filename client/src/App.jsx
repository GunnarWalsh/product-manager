import './App.css';
import ProductForm from './components/ProductForm';
import ProductHome from './components/ProductHome'
import Product from './components/Product';
import Nav from './components/Nav'

import {Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import ProductEdit from './components/ProductEdit';


function App() {
  const [allProducts, setAllProducts] = useState([])
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<><ProductForm allProducts={allProducts} setAllProducts={setAllProducts} /><ProductHome /></> }/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/products/edit/:id' element={<ProductEdit/>}/>
      </Routes>
    </div>
  );
}

export default App;
