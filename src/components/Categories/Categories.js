import React from 'react'

const Categories = (props) => {

  return (
    <div className="aside">
      <ul>
        {
          props.products.map((product, i) => {
            const productData = product.node;
            return (
              <li key={i} value={productData.brand}>{productData.brand}</li>
              )
          })
        }
      </ul>
    </div>
    );
};

export default Categories
