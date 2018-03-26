import React from 'react';
import Img from "gatsby-image";

const ProductImage = image => {
    return (<picture>
        <source srcSet={image.value}/>
        <img src={image.value}/>
    </picture>)
}

export default ProductImage;
