import React, { useEffect, useState } from 'react';
import './App.css';
import {Navbar} from './components'
import Home from "./components/pages/Home/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageLogin from './components/pages/Login/PageLogin';
import PageRegister from './components/pages/Register/PageRegister';
import AllProducts from './components/pages/AllProducts/AllProducts';
//import Cart from './components/pages/Cart/Cart';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import ProductInfo from './components/pages/ProductInfo/ProductInfo';
import Payment from './components/pages/Payment/Payment';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
   return (
     <div>   
       <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/PageLogin' element={<PageLogin/>} />
          <Route path='/PageRegister' element={<PageRegister/>} />
          <Route path='/AllProducts' element={<AllProducts/>} />
          {/* <Route path='/Cart' element={<Cart/>} /> */}
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/ProductInfo/:productId' element={<ProductInfo />} />
          <Route path='/Payment' element={<Payment />} />
        </Routes>
       </Router>
      </div>
      
   )
 }
// function App(){
//   return (
//     <div>
//       <Navbar/>
//       <Home />
//     </div>
//   )
// }
export default App;
