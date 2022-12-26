import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from "react-icons/fa";
import './Card.css'
import { Link } from 'react-router-dom';
import * as React from 'react';

export function Products(props) {

    return (
        <div className="productList">
            <Link to={`../pages/ProductInfo/${props.id}`} className="btn btn-primary">
                <div key={props.id} className="productCard">
                    <img src={props.image} alt='product-img' className='productImage'></img>

                    <FaShoppingCart className={"productCard_cart"} />
                    <FaRegBookmark className={"productCard_wishlist"} />
                    <FaFireAlt className={"productCard_fastSelling"} />

                    <div className="productCard_content">
                        <h3 className="productName">{props.name}</h3>
                        <div className="productDesc">  {props.desc} </div>
                        <div className="displayStack_1">
                            <div className="productPrice">{props.price} AA </div>
                            <div className="productSale">  {props.totalSale} </div>
                        </div>
                        <div className="displayStack_2">
                            <div className="productRating">
                                {[...Array(props.rating)].map((index) => (
                                    <FaStar id={index + 1} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}