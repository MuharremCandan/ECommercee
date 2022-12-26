

const productData = [
    {
        id:1,
        name:"Huawei Surface",
        desc:"Huawei Matebook D 15 Intel Core i5 10210U 8GB 256GB SSD Windows 10 Home 15.6 FHD Taşınabilir Bilgisayar ",
        span:"Popüler Ürünler",
        heading:"Mükemmel Bilgisayar",
        size:"17.3 Inc ",
        graphic : "GTX 1650",
        processor : "i7-10750h",
        ram : "8GB 3200MHz",
        image:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/134118-3_large.jpg",
        productType:"openbackHeadphones",
        price:"22.000 TRY",
        rating:5,

  
    },
    {
        id:2,
        name:"Acer Surface",
        desc: "Acer Aspire 3 A315-56-327T Intel Core i3 1005G1 8GB 256GB SSD Freedos 15.6'' FHD Taşınabilir Bilgisayar NX.HS5EY.006",
        span:"Popüler Ürünler",
        heading:"Mükemmel Bilgisayar",
        size:"17.3 Inc",
        graphic : "GTX 1650",
        processor : "i7-10750h",
        ram : "8GB 3200MHz",
        image:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/acer/thumb/135334-1_large.jpg",
        productType:"openbackHeadphones",
        price:"22.000 TRY",
        rating:5,
  

    },
    {
        id:3,
        name:"MacBook Surface",
        desc: "Apple MacBook Pro M2 Çip 8GB 256GB SSD macOS 13'' Taşınabilir Bilgisayar Uzay Grisi MNEH3TU/A",
        span:"Popüler Ürünler",
        heading:"Mükemmel Bilgisayar",
        size:"17.3 Inc",
        graphic : "GTX 1650",
        processor : "i7-10750h",
        ram : "8GB 3200MHz",
        image:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/130713-1-1_large.jpg",
        productType:"openbackHeadphones",
        price:"22.000 TRY",
        rating:5,


    },
    {
      id:4,
      name:"Lenovo Surface",
      desc: "Lenovo V15 G2 ITL Intel Core i5 1135G7 8GB 512GB SSD Freedos 15.6'' FHD Taşınabilir Bilgisayar 82KB00CATX",
      span:"Popüler Ürünler",
      heading:"Mükemmel Bilgisayar",
      size:"17.3 Inc",
      graphic : "GTX 1650",
        processor : "i7-10750h",
        ram : "8GB 3200MHz",
      image:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/135948-1_large.jpg",
      productType:"openbackHeadphones",
      price:"22.000 TRY",
      rating:5,


  },
  {
      id:5,
      name:"Asus Surface",
      desc: "Asus X515MA-BR423W Intel Celeron N4020 4GB 128GB SSD Windows 11 Home 15.6'' HD Taşınabilir Bilgisayar",
      span:"Popüler Ürünler",
      heading:"Mükemmel Bilgisayar",
      size:"17.3 Inc",
      graphic : "GTX 1650",
        processor : "i7-10750h",
        ram : "8GB 3200MHz",
      image:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/134619-4_large.jpg",
      productType:"openbackHeadphones",
      price:"22.000 TRY",
      rating:5,


  },
  {
      id:6,
      name:"HP Surface",
      desc: "HP OMEN 15-EK1015NT Intel Core i7-10870H 16GB RAM 1TB SSD 8GB RTX3070 Windows 10 Home 15.6'' FHD 144Hz",
      span:"Popüler Ürünler",
      heading:"Mükemmel Bilgisayar",
      size:"17.3 Inc",
      graphic : "GTX 1650",
        processor : "i7-10750h",
        ram : "8GB 3200MHz",
      image:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/135952-2_large.jpg",
      productType:"openbackHeadphones",
      price:"22.000 TRY",
      rating:5,


  },

]

export default productData;

/*
import {useState,useEffect} from 'react';

function ProductData() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://localhost:8080/api/products")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
  export default ProductData;

  */