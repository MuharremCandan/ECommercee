import React, { Fragment, useState, useEffect } from 'react'
import {Products} from '../../card/Products.js'
import contents from '../../card/content.js'
import axios from 'axios';

function AllProducts() {

  const [detail, setDetail] = useState(contents);
  const [products, setProducts] = useState();

  const getProductsFromServer = async () => {
    await axios.get('http://localhost:8080/api/products')
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    getProductsFromServer();
  }, [])
  return (
    <>
        <div className='Card'>
    {contents.map(contents => (
        <Products
        key = {contents.id}
        desc = {contents.desc}
        image = {contents.image}
        name = {contents.name}
        price = {contents.price}
        totalSale = {contents.totalSale}
        rating = {contents.rating}
        />
    ))}
</div>
</>
  )
}

export default AllProducts