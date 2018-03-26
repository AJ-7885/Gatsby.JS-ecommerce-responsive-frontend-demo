import React from 'react'
import ProductImage from './ProductImage'
import ProductRating from './ProductRating'

const Product = (productData) => {
    const currency = '€'; // TODO: it should dynamically come from locale configuration setting
    return (<div className="product-card">

        <div className="product-image">
            <ProductImage value={productData.image}/>
        </div>
        <div className="product-info">
            <h4>{productData.brand}</h4>
            <h5>{productData.name.replace(productData.brand, '').replace(productData.type, '')}</h5>
            <h6>{productData.type}</h6>
            <h6>{productData.price / 100} {currency} /{productData.size}</h6>
            <h5><ProductRating value={productData.rating}/></h5>
        </div>


    </div>);
};

export default Product
