import './pstyle.css'
import React, {Fragment,useState,useMemo} from 'react'
import { ShoppingCart } from '@material-ui/icons';
import { IconButton } from "@material-ui/core";
import axios from 'axios';
import { useEffect } from 'react';
import { Link} from 'react-router-dom';


const Product =(pr) => {
  

    const [products,setProducts] = useState([]);
    const [ct, setCt] = useState("")
    useEffect(()=>{
      getProduct()
      getCategories();
      
    },[]);
    
    

    const getProduct = () => {
      axios.get("http://localhost:8080/api/products")
      .then((response) => {
        setProducts(response.data.products);
        console.log(response)
        // console.log(response)
      })
    }
    const getCategories = () => {
      axios.get("/api/categories")
      .then((response) => {
        setCt(response.data.categories);
        console.log(response)
        // console.log(response)
      })
    }
    const [genre, setGenre] = useState("");
      const [searchTerm, setSearchTem] = useState("");
  
    const prr = useMemo(()=>{
      if (genre === ""){
        if (searchTerm === ""){
          return products;
        } else{
          return products.filter((product) => {
            const searchFields =
            `${product.product_name.toLowerCase()} ` +
            `${product.product_graphic.toLowerCase()} ` +
            `${product.product_proccessor.toLowerCase()}` +
            `${product.product_ram.join("").toLowerCase()}`;
            return searchFields.includes(searchTerm.toLowerCase());         
          });
        }
      }
      return products.filter((product) => {
        const productGenre = product.genre.map((val)=> val.toLowerCase())
        return productGenre.includes(genre)
      })
    },[genre,searchTerm])
  

  return ( 
    <>
      {/* <div className="container-fluid" style={{display:'flex',width:'15%', marginLeft:'50px'}}>
        <div className="col" id='fs_app'>
          <section className="col-12" id='fs_header_bar'>
            <div className="row">
              <div className="col-2">
                <i className="fa fa-chevron-left"></i>
              </div>
              <div className="col-10" id="fs_page_title">
                Filtreleme
              </div>
            </div>
          </section>

          <section className="col-12" id="fs_price_body">
            <div>
              <span className="heading" >
                Fiyat Aralığı
              </span>
              <div className="line"></div>
              <div className="line1"></div>
              <div>
                <ul>
                  <li>25</li>
                  <li>50</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="col-12" id="fs_distance_body">
            <span className="heading">
              Marka
            </span>
            <div className="contents">
              <ul>
                <li>
                  <span>Marka 1</span>
                  <span className="text-right"></span>
                </li>
                <li>
                  <span>Marka 2</span>
                  <span className="text-right"></span>
                </li>
                <li>
                  <span>Marka 3</span>
                  <span className="text-right"></span>
                </li>
              </ul>
            </div>
          </section>
          <section className="col-12" id="fs_distance_body">
            <span className="heading">
              İşlemci Tipi
            </span>
            <div className="contents">
              <ul>
                <li>
                  <span>İntel Core i7</span>
                  <span className="text-right"></span>
                </li>
                <li>
                  <span>İntel Core i9</span>
                  <span className="text-right"></span>
                </li>
                <li>
                  <span>AMD Ryzen 7</span>
                  <span className="text-right"></span>
                </li>
                <li>
                  <span>AMD Ryzen 9</span>
                  <span className="text-right"></span>
                </li>
              </ul>
            </div>
          </section>
          <section className="col-12" id="fs_distance_body">
            <span className="heading">
              Ekran Kartı
            </span>
            <div className="contents">
              <ul>
                <li>
                  <span>Nvidia GeForce RTX 3070 </span>
                  <span className="text-right"></span>
                </li>
                <li>
                  <span>Nvidia GeForce RTX 3060</span>
                  <span className="text-right"></span>
                </li>
                <li>
                  <span>Nvidia GeForce GTX 1650</span>
                  <span className="text-right"></span>
                </li>
                <li>
                  <span>AMD Radeon RX 5600</span>
                  <span className="text-right"></span>
                </li>
                <li>
                  <span>AMD Radeon RX 5700</span>
                  <span className="text-right"></span>
                </li>
              </ul>
            </div>
          </section>
          <section className="col-12" id="fs_distance_body">
            <span className="heading">
              RAM (Sistem Belleği)
            </span>
            <div className="contents">
              <ul>
                <li>
                  <span>8 GB</span>
                  <span className="text-right"></span>
                </li>
                <li>
                  <span>16 GB</span>
                  <span className="text-right"></span>
                </li>
                <li>
                  <span>32 GB</span>
                  <span className="text-right"></span>
                </li>
                <li>
                  <span>64 GB</span>
                  <span className="text-right"></span>
                </li>
              </ul>
            </div>
          </section>
        </div>
		</div> */}
        <Fragment>
          <div className="property" style={{float:'right',marginRight:'25px'}} >
          <section>
            
            <div className="row">
              
            {
                products.map((products) => {
                  return(
                    
                    <div className="column">
                      <div className="single-property">
                      <Link to={`/ProductInfo/${products._id}`}>
                       <div className="card">
                          <div className="property-thumb">
                            <div className="property-tag"> </div>
                            {/* {img.map((item)=>{
                              <img src={item[0].image_path} alt="Laptop1" /> 
                            })} */}
                            <img src={products?.product_images} alt="" />
                          </div>

                          <div className="property-content" >
                            <h3 style={{fontStyle:'oblique',fontSize:'22px'}}>{products.product_name}</h3>
                            <div className="mark" style={{background:'white'}}>
                              <i className="fa-solid fa-location-dot"></i>
                              <span> {products.product_desc} </span>
                            </div>
                          </div>

                          <div className="property-footer">
                            <div className="amount" style={{background:'#fdae5c', borderRadius:'20px',padding:'0px 10px', color:'white', fontWeight:'300',
                                fontSize:'22px',marginTop:'20px', }}>
                              <span className="">{products.product_price}</span>
                              <IconButton aria-label='Show cart items' color="inherit" style={{marginBottom:'0px',color:'white'}} >
                                <ShoppingCart />
                              </IconButton>
                            </div>
                            
                          </div>

                        </div>
                    </Link>
                      </div>
                    </div>

                  )
                })
            }
            </div>
          </section>
          </div>
        </Fragment>
    </>
    
 
   
  )
}

export default Product