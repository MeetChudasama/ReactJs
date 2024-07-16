import React from 'react'

const ProductData = ({product}) => {
  return (
    <>
      <div className="col-3 mb-3">
        <div className="card ">
          <img src={product.image} height={200}/>
          <div className="card-body">
            <p className="card-text">
                {product.name}<br/>
                {product.stock}<br/>
                ${product.price}<br/>

            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductData
