import React from 'react'
import ProductData from './ProductData'

const ProductItem = ({products}) => {  //so in this we have directly de-structed 
  return (
    <>
      {products.length == 0 && <h1>No Product Found</h1>}
      <div className="row">
        {products.map((products) => (
          <ProductData key={products.id} product={products} />
        ))}
      </div>
    </>
  );
}

export default ProductItem
