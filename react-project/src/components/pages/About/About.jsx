import React from 'react'
import Footer from '../Home/Footer/MyFooter'
import Services from '../Home/Services/Services'
import './about.css'


const About = () => {
  return (
    <>
        <div className='nav' style={{background:'white', height:'70px'}}>
            <div className="left">
                E-Ticaret
            </div>
            <div className="right">
                <ul className='list'>
                    <li>Kimdir</li>
                    <li>Ne Yapar ?</li>
                </ul>
            </div>
        </div>

        <div className="second">
            <h3 style={{marginTop:'5px'}}>Proje Sahipleri</h3>
            <h3 class="margin">Scrum Master: Ahmet Eren Çelik</h3>
            <h3 class="margin">Frontend: Ravza Akkum,Barış Yesari</h3>
            <h3 class="margin">Backend: Muharrem Candan</h3>
        </div>
        <Services />
        <Footer />


    </>

  )
}

export default About