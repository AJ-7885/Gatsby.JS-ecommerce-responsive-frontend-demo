import React from 'react'
import ProductImage from './ProductImage'
import ProductRating from './ProductRating'

const Product = (productData) => {
  const currency='€'; // TODO: it should dynamically come from locale configuration setting
  return (<div className="product">

      <ProductImage value={productData.image}/>
      <p>{productData.name}</p>
      <p>Type:{productData.type}</p>

      <p>{productData.id}</p>

      <a href={productData.slug} target="_blank">Details</a>
      <p>Brand:{productData.brand}</p>
      <p>{productData.price/100} {currency} /{productData.size}</p>
      <ProductRating value={productData.rating}/>
  </div>);
};

export default Product
