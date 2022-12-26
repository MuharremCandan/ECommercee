import React, { useState,useEffect } from 'react'
import axios from 'axios';
import "./pi.css";
import Footer from '../Home/Footer/MyFooter'
import Services from '../Home/Services/Services'
import { useParams } from 'react-router-dom';
import Product from '../AllProducts/Products/Product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';




const ProductInfo = () => {

  
  const [quantity,setquantity] = useState(1);
  const [index, setIndex] = useState(0);
  const { productId } = useParams()

  const [product, setProduct] = useState([])
  const [img, setImg] = useState([])

  useEffect(() => {
    getProduct();
    getImages();
  },[])

  const getProduct = () => {
    let isMounted = true;
    axios.get(`http://localhost:8080/api/products/${productId}`)
    .then((response) => {
      if(isMounted){
        console.log(response)
        setProduct(response.data.product);
      }
      
    })
    return () => {
      isMounted = false;
    }
  }
  console.log(productId)
  const getImages = () => {
    axios.get(`http://localhost:8080/api/images/${productId}`)
      .then((res) => {
        setImg(res.data.images)
        console.log(res)
      })
  }

  const dispatch = useDispatch()

  

  return (
    <div>
      <div>
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <img src={(img[0]?.image_path && img[index]?.image_path)} className="product-detail-image" alt=""/>
            </div>
            <div className="small-images-container">
              {img?.map((item, i) => (
                <img 
                  key={i}
                  src={(item.image_path)}
                  alt=""
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>

          <div className="product-detail-desc">
            <h1>{product.product_name}</h1>
            <div className="reviews">
              <div>
                ******
              </div>
              <p>
                (20)
              </p>
            </div>
            <h4>Detaylar </h4>
            <p>{product.product_desc}</p>
            <p>Ekran Boyutu : {product.product_size}</p>
            <p>Ekran Kartı : {product.product_graphic}</p>
            <p>İşlemci : {product.product_processor}</p>
            <p>RAM : {product.product_ram}</p>

            <p className="price">₺{product.product_price}</p>
            <div className="quantity">
              <h3 style={{marginBottom:'28px'}}>Adet </h3>
              <p className="quantity-desc">
                <span className="minus" onClick={()=>setquantity(quantity-1)}>-</span>
                <span className="num">{quantity}</span>
                <span className="plus" onClick={()=>setquantity(quantity+1)} >+</span>
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart" onClick={function(e){dispatch(addToCart({
                id : product._id,
                name : product.product_name,
                desc : product.product_desc,
                img : product.product_images,
                price : product.product_price,
                quantity

              }))}} >Sepete Ekle</button>
              <button type="button" className="buy-now" onClick={function(e){dispatch(addToCart({
                id : product._id,
                name : product.product_name,
                desc : product.product_desc,
                img : product.product_images,
                price : product.product_price,
                quantity

              }))}} >Satın Al</button>
            </div>
          </div>
        </div>

        <div className="maylike-products-wrapper">
            <h2>Diğer Ürünler</h2>
            <div className="marquee">
              <div className="maylike-products-container track">
                  <Product />
              </div>
            </div>
      </div>
    </div>

    <Services />
    <Footer />
    
  </div>
  )
}

export default ProductInfo