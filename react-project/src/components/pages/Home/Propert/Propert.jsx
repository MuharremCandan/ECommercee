import "../Propert/propert.css"
import contents from '../../../card/content.js'

import '../../../card/Card.css'
import React, { Fragment, useState, useEffect } from 'react'
import axios from "axios"
import { Button } from "@material-ui/core"

const Propert = () => {

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
      <Fragment>
        <section className="property" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <div className="center">
            <h3>Popüler Ürünler</h3>
          </div>

          <div className="row">

            {
              detail.map((detail) => {
                return (
                  <>
                    <Button href={`/ProductInfo/${detail.id}`}>
                      <div className="column">
                        <div className="single-property">
                          <div className="card">
                            <div className="property-thumb">
                              <div className="property-tag"> FF</div>
                              <img src={detail.image} alt="Laptop1" />
                            </div>

                            <div className="property-content">
                              <h3>{detail.name}</h3>
                              <div className="mark" style={{ background: 'white' }}>
                                <i className="fa-solid fa-location-dot"></i>
                                <span> {detail.span} </span>
                              </div>
                              <span className="amount">{detail.price}</span>
                            </div>

                            <div className="property-footer">
                              <ul>
                                <li>
                                  <span> {detail.graphic} </span>
                                </li>
                                <li>
                                  <span> {detail.processor} </span>
                                </li>
                                <li>
                                  <span> {detail.ram} </span>
                                </li>

                              </ul>
                            </div>

                          </div>
                        </div>
                      </div>
                    </Button>
                  </>


                )
              })
            }



          </div>

          <div className="more-property">
            <label className="property-btn">Daha Fazlası</label>
          </div>

        </section>


      </Fragment>

    </>



  )
}

export default Propert