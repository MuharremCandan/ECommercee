import React from 'react'
import Product from './Products/Product'
import Footer from '../Home/Footer/MyFooter'
import Services from '../Home/Services/Services'
import "./allpr.css"
import Sidebar from './Sidebar/Sidebar'

function AllProducts() {

  

  return (
    <>
        
        <div className='home' >
            <Sidebar />
            <Product />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Services />
        <Footer />
                
    </>
    

  )
}

export default AllProducts