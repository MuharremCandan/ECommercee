import React from 'react'
import './cart.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {

    const products = useSelector(state=>state.cart.products)

    const totalPrice = () => {
        let total = 0
        products.forEach((item) => (total += item.quantity * item.price))
        return total.toFixed(3);
    }
    console.log(products)
  return (
    <div className='cart'>
        <h1>Sepetteki Ürünler</h1>
        {products?.map((product) => {
            return(
            <div className="product" key={product.id}>
                <img src={product.img} alt="" />
                <div className="details">
                    <h1 style={{fontSize:'18px'}} >{product.name}</h1>
                    <p> {String(product.desc).substring(0,50)} </p>
                    <div className="price">
                        {product.quantity} x {product.price}
                    </div>
                </div>
                
            </div>
            )    
    })}
        <div className="total">
            <span>Toplam</span>
            <span> ₺{totalPrice()} </span>
        </div>
        <Link to={'/Payment'}>
            <button>Satın Al</button>
        </Link>
        <span>Reset</span>
    </div>
  )
}

export default Cart