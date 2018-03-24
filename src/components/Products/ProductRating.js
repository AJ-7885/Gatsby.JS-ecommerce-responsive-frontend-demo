import React from 'react';
import './ProductRating.scss'

const ProductRating = rating => {
  return (<div className="stars-outer">
    <div className="stars-inner" style={{width:rating.value}}></div>
  </div>)
}
export default ProductRating;
