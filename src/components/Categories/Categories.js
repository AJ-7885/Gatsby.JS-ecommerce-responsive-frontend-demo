import React from 'react'

const Categories = (props) => {

  const brands = [];
  props.products.map((product, i) => {
    if (brands.indexOf(product.node.brand) === -1) {
      brands.push(product.node.brand);
    }
  });
  brands.sort();
  return (<div className="aside">
    <ul>
      {
        brands.map((brand, i) => {
          return (<li key={i} value={brand}>
            <a href="#">
              <span>► </span>
              {brand}</a>
          </li>)
        })
      }
    </ul>
  </div>);
};

export default Categories
