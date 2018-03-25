import React from 'react'
import Product from './Product'

const ProductGrid = (props) => {
  return (<div className="products">
    {
      props.products.map((product, i) => {
        const productData = product.node;
        return (<Product key={i} {...productData}/>)
      })
    }
  </div>);
};

export default ProductGrid
