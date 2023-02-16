import logo from './logo.svg';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductHome from './components/ProductHome'

import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductHome/>}/>
        <Route path='/new' element={<ProductForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
