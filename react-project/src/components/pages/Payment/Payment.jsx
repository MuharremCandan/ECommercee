import { Box,  TextField  } from '@material-ui/core';
import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import './payment.css'
import { useSelector } from 'react-redux';
import Services from '../Home/Services/Services'
import Footer from '../Home/Footer/MyFooter'


const Payment = () => {
    const [currentPage, setCurrentPage] = useState('page1');

    function handlePageChange(page) {
    setCurrentPage(page);
    }
  return (
    <>
    <div style={{marginBottom:'20em'}} className='infos'>
      
      <button onClick={() => handlePageChange('page1')} style={{border:'none'}} >
        <Card style={{ width: '15rem',borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial',borderRadius:'2px'}}>
          <Card.Body>
            <Card.Title>Ürün Bilgileri</Card.Title>       
          </Card.Body>
        </Card>
      </button>
      <button onClick={() => handlePageChange('page2')} style={{border:'none'}}  >
        <Card style={{ width: '15rem' , borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial',borderRadius:'2px'}}>
          <Card.Body>
            <Card.Title>Adres Bilgileri</Card.Title>      
          </Card.Body>
        </Card>
      </button>
      <button onClick={() => handlePageChange('page3')} style={{border:'none'}}  >
        <Card style={{ width: '18rem' , borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial',borderRadius:'2px'}}>
          <Card.Body>
            <Card.Title>Ödeme Seçenekleri</Card.Title>      
          </Card.Body>
        </Card>
      </button>
      {currentPage === 'page1' && <Page1 />}
      {currentPage === 'page2' && <Page2 />}
      {currentPage === 'page3' && <Page3 />}
    </div>
    <Services />
    <Footer />
    </>
  )
}

export default Payment

function Page1() {
    const products = useSelector(state=>state.cart.products)
    const totalPrice = () => {
    let total = 0
    products.forEach((item) => (total += item.quantity * item.price))
    return total.toFixed(3);
    }
    const [currentPage, setCurrentPage] = useState('page1');

    function handlePageChange(page) {
    setCurrentPage(page);
    }
  return (
    <div>
      <Total />
      {products?.map((pr) => {
        return (
          <>
          <div className="product" >
            <img style={{width:'300px'}} src={pr.img} alt="" />
            <div className="details">
              <h1 style={{fontSize:'18px'}} > {pr.name} </h1>
              <p> {pr.desc} </p>
              <div className="price">
                {pr.quantity} x {pr.price} SİL
              </div>
            </div>
          </div>
        </>
        )
      })}
    </div>
  )
}
  
function Page2() {
  return (
    <div>
      <Total />
    <Box style={{marginTop:'15px'}} component='form'  sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <div style={{justifyContent:'space-between',marginTop:'5px'}}>
        <TextField size='small' style={{margin:'5px'}} required id="outlined-basic" label="isim" variant="outlined" />
        <TextField size='small' style={{margin:'5px'}}  required id="outlined-basic" label="Soyisim" variant="outlined" />
      </div>
      <div style={{marginTop:'5px'}}>
        <TextField style={{margin:'5px'}} required size='small' id="outlined-basic" label="Telefon" variant="outlined" />
        <TextField style={{margin:'5px'}} required size='small' id="outlined-basic" label="İl" variant="outlined" />
      </div>
      <div style={{textTransform:'',justifyContent:'space-between',marginTop:'5px'}}>
        <TextField size='small' style={{margin:'5px'}} required id="outlined-basic" label="İlçe" variant="outlined" />
        <TextField size='small' style={{margin:'5px'}}  required id="outlined-basic" label="Mahalle" variant="outlined" />
      </div>
      <div style={{justifyContent:'space-between',marginTop:'5px'}}>
        <TextField  size='medium' style={{margin:'5px', width:'27.5em',height:''}} required id="outlined-basic" label="Adres" variant="outlined" />
      </div>
      <div>
        <button style={{width:'35em',height:'3em',marginTop:'5px',color:'White',backgroundColor:'orange',border:'none',borderRadius:'10px'}}>Adresi Kaydet</button>
      </div>
    </Box>
    </div>
  )
}
function Page3() {
    const [currentPage, setCurrentPage] = useState('KapidaOdeme');

    function handlePageChange(page) {
    setCurrentPage(page);
    }
  return (
    <div>
      <Total />
      <div style={{marginLeft:'17.5em'}}>
        <button onClick={() => handlePageChange('KapidaOdeme')} style={{border:'none'}} >
          <Card style={{ width: '5rem',color:'orange',borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial',borderRadius:'2px'}}>
            <Card.Body>
              <Card.Title style={{fontSize:'10px'}}>Kapıda Ödeme</Card.Title>       
            </Card.Body>
          </Card>
        </button>
        <button onClick={() => handlePageChange('KrediKarti')} style={{border:'none'}} >
          <Card style={{ width: '5rem',color:'orange',borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial',borderRadius:'2px'}}>
            <Card.Body>
              <Card.Title style={{fontSize:'10px'}}>Kredi Kartı</Card.Title>       
            </Card.Body>
          </Card>
        </button>
        <button onClick={() => handlePageChange('BankaKarti')} style={{border:'none'}} >
          <Card style={{ width: '5rem',color:'orange',borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial',borderRadius:'2px'}}>
            <Card.Body>
              <Card.Title style={{fontSize:'10px'}}>Banka Kartı</Card.Title>       
            </Card.Body>
          </Card>
        </button>
        {currentPage === 'KapidaOdeme' && <KapidaOdeme />}
        {currentPage === 'KrediKarti' && <KrediKarti />}
        {currentPage === 'BankaKarti' && <BankaKarti />}
      </div>
      
    </div>
  )
}


function KapidaOdeme() {
  return (
    <div>
      Kapıda Ödeme
    </div>
  )
}
function KrediKarti() {
  return (
    <div>
      Kredi Karti Ödeme
    </div>
  )
}
function BankaKarti() {
  return (
    <div>
      Banka Karti Ödeme
    </div>
  )
}
function Total() {
  const products = useSelector(state=>state.cart.products)
  const totalPrice = () => {
    let total = 0
    products.forEach((item) => (total += item.quantity * item.price))
    return total.toFixed(3);
}
  return (
    <div className="priceinfos">
        {/* -------- Sağ kısım --------------------- */}
        <Card style={{width:'15em',height:'20em'}}>
          <Card.Body>
            <Card.Text style={{fontWeight:'500',fontSize:'24px'}}>Şipariş Özeti</Card.Text>
            <Card.Text style={{fontWeight:'300'}}>Ara Toplam ₺{totalPrice()}</Card.Text>
            <Card.Text style={{fontWeight:'300'}}>Kargo Toplam  ₺20.00</Card.Text>
            <Card style={{borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial'}}>
              <Card.Text style={{fontWeight:'500',fontSize:'18px'}}>Toplam</Card.Text>
            </Card>
            <Card.Text style={{fontWeight:'500',fontSize:'18px',color:'orange'}}>₺{totalPrice()}</Card.Text>
          </Card.Body>
        </Card>
        <button  style={{width:'18em',height:'40px',margin:'10px',color:'white',backgroundColor:'#2879fe',border:'none',borderRadius:'10px'}}>Devam Et</button>
        
      </div>
  )
}

