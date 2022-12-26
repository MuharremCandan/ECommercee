import React, { useState,useEffect, useMemo } from 'react'
import './newstyle.css'
import axios from 'axios';
const Sidebar = () => {

	const [products,setProducts] = useState([]);
    useEffect(()=>{
      getProduct();
	  getCategories();
    },[]);    
    const getProduct = () => {
      axios.get("/api/products")
      .then((response) => {
        setProducts(response.data.products);
        console.log(response)
        // console.log(response)
      })
    }
	const getCategories = () => {
		axios.get("/api/categories")
		.then((response) => {
		  setProducts(response.data.products);
		  console.log(response)
		  // console.log(response)
		})
	}
	const [genre, setGenre] = useState("");
  	const [searchTerm, setSearchTem] = useState("");

	const pr = useMemo(()=>{
		if (genre === ""){
			if (searchTerm === ""){
				return products;
			}
		}
	})

	
  return (
    <>
		<div className="container-fluid" style={{display:'flex',width:'18%', marginLeft:'30px'}}>
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
		</div>

    </>
  )
}

export default Sidebar