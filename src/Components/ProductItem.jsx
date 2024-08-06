import React from 'react'
import ProductData from './ProductData'
import { Container } from 'react-bootstrap';

const ProductItem = ({products}) => {  //so in this we have directly de-structed 
  return (
    <>
      <Container className='mt-5'>
        {products.length == 0 && <h1>No Product Found</h1>}
        <div className="row">
          {products.map((products) => (
            <ProductData key={products.id} product={products} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default ProductItem
