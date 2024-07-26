import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  // const {productname} = useParams()
  const params=useParams()
  console.log(params);
  return (
    <>  
      <h1>Product Details</h1>
      {productname}
    </>
  )
}

export default ProductDetails
