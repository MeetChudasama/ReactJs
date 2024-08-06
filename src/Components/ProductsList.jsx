import React from 'react'
import ProductItem from './ProductItem';
import RegisterImg1 from "../assets/Products/P1.jpg";
import RegisterImg2 from "../assets/Products/P2.jpeg";
import RegisterImg3 from "../assets/Products/P3.jpeg";
import RegisterImg4 from "../assets/Products/P4.jpeg";
import RegisterImg5 from "../assets/Products/P5.jpeg";

const ProductsList = () => {
    const Products = [
      { id: 11, name: "Glass", image: RegisterImg1, price: 500, stock: 12 },
      { id: 12, name: "Trimmer", image: RegisterImg2, price: 1500, stock: 17 },
      { id: 13, name: "Laptop", image: RegisterImg3, price: 75500, stock: 7 },
      { id: 14, name: "Keyboard", image: RegisterImg4, price: 5500, stock: 35 },
      { id: 15, name: "Mouse", image: RegisterImg5, price: 3500, stock: 33 },
    ];
  return (
    <>
      <ProductItem products={Products}/>
    </>
  )
}

export default ProductsList
