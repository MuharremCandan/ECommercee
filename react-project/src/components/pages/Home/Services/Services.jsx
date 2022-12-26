import React, {Fragment,useState,useEffect} from 'react'
import ServicesDetail from './ServicesDetail';
import Aos from 'aos'
import "aos/dist/aos.css"
import './services.css'

const Services = () => {
    const [detail,setDetail] = useState(ServicesDetail);
    
    useEffect(() => {
        Aos.init({duration :2000, once:true, easing:"ease"})
    },[])
  return (
    <Fragment>
        <section data-aos="fade-up" className="services">
            <div className="heading">
                <span>LOREM</span>
                <h2>LOREM</h2>
            </div>
            
            <div className="services-row">
                {
                    detail.map((detail) =>{
                        return(
                            <div className="services-card">
                                <div className="services-column">
                                    <div className="content">
                                        <div className="services-icon">
                                            <img src={detail.image} style={{width:'50px'}} alt="Icon" />
                                        </div>
                                        <div className="services-content">
                                            <h3> {detail.heading} </h3>
                                            <p> {detail.info} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) 
                }
                
            </div>

        </section>
    </Fragment>
  )
}

export default Services