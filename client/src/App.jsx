import './App.css';
import ProductForm from './components/ProductForm';
import ProductHome from './components/ProductHome'
import Product from './components/Product';
import Nav from './components/Nav'

import {Routes, Route, Link} from 'react-router-dom'
import { useState, useEffect} from 'react';
import ProductEdit from './components/ProductEdit';
import {io} from 'socket.io-client'

function App() {
  const [allProducts, setAllProducts] = useState([])
  const [socket] = useState(()=>io(':8000',{
    withCredentials:true
}))
  useEffect(()=>{
    socket.on('connection', ()=>{
      console.log('connected to server')
    })
    return() => socket.off('connection');
  },[])



  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<><ProductForm allProducts={allProducts} setAllProducts={setAllProducts} socket={socket}/><ProductHome  socket={socket}/></> }/>
        <Route path='/products/:id' element={<Product socket={socket}/>}/>
        <Route path='/products/edit/:id' element={<ProductEdit/>}/>
      </Routes>
    </div>
  );
}

export default App;
