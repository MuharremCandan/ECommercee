
import ImageSlider from "../../slider/ImageSlider"
import { SliderData } from "../../slider/SliderData"
import React from 'react'
import Propert from "./Propert/Propert"
import Services from "./Services/Services"
import Footer from "./Footer/MyFooter"

const Home =() => {
  
  return ( 
    <>
      <ImageSlider slides= {SliderData}/> 
      <br />
      <br />
      <br />
      <Propert />
      <Services  />
      <Footer />
    </>
    
 
   
  )
}

export default Home;