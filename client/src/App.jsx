import './App.css';
import ProductForm from './components/ProductForm';
import ProductHome from './components/ProductHome'

import {Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [allProducts, setAllProducts] = useState([])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><ProductForm allProducts={allProducts} setAllProducts={setAllProducts} /><ProductHome /></> }/>
        
      </Routes>
    </div>
  );
}

export default App;
