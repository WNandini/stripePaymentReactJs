import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import ProductListing from './components/productListing';
import Success from './components/success';
import Cancel from './components/cancel';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductListing/>} />
        <Route path='/success' element={<Success/>}/>
        <Route path='/cancel' element={<Cancel/>} />
      </Routes>
    </BrowserRouter>
  )
} 

export default App;