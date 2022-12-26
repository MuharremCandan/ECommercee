import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import './slider.css'
import left from '../../assets/left.png'
import right from '../../assets/right.png'



const ImageSlider = ({slides}) => {
    const [current,setCurrent] = useState(0)
    const length = slides.length
    
    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current + 1)

    }

    const prevSlide = () => {
        setCurrent(current===0 ? length-1 :current-1)
    }
    

    if(!Array.isArray(slides)|| slides.length <= 0 ){
        return null;
    }


  return (
    <section className='slider'>
        {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
        <img src={left} className='left-arrow' onClick={prevSlide} />
        <img src={right} className='right-arrow' onClick={nextSlide} />

        {SliderData.map(
        (slide,index) => {
           return (
                <div className={index === current ? 'slide active': 'slide'} key = {index}>
                    {index === current && (
                        <div>
                            <img src={slide.image } alt="travel image" className='image'/>
                            {/* <h1 className='header'>React Is Awesome</h1> */}
                        </div>
                    )}                  
                </div>
           )                      
        }
    )}
    </section>
  )
}

export default ImageSlider