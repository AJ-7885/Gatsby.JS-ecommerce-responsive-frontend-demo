import React from 'react';

const ProductImage = image => {
  return (<picture>
    <source srcSet={image.value}/>‚
    <img src={image.value}/>
  </picture>)
}

export default ProductImage;
