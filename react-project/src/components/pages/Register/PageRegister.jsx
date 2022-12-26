import React from 'react'
import "../Register/styleregister.css";



const PageRegister = () => {
  return (
    <div className="cover page">
            <h1>Üye Ol</h1>
            <input type='text' placeholder='İsim Soyisim' />
            <input type='text' placeholder='E-posta' />
            <input type='password' placeholder='Sifre' />
            <input type='password' placeholder='Sifre Tekrar' />
            <input type='text' placeholder='Telefon' />

            <div className='loginbtn' >Üye Ol</div>
            <p className='text'> Yada </p>

            <div className='altlogin'>
                <div className='facebook'></div>
                <div className='google'></div>
            </div>
    </div>
  )
}
export default PageRegister