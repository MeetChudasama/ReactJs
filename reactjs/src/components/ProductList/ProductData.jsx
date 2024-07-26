import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const ProductData = ({product}) => {
  return (
    <>
      <div className="col-3 mb-3">
        <div className="card ">
          <img src={product.image} height={200}/><hr />
          <div className="card-body">
            <p className="card-text">
                {product.name}<br/>
                {`Stock: ${product.stock}`}<br/>
                ₹{product.price}<br/>
            </p>
            <Button variant='primary' className=' me-2'>Add to cart</Button>
            {/* <Button variant='info' className=' me-2'>View</Button> */}
            <Link className='btn btn-info' type="button" to={`/products/details${product.name}`} >View</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductData
