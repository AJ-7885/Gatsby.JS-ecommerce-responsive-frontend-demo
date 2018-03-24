import React from 'react'
import Link from 'gatsby-link'
import ProductGrid from '../components/Products/ProductGrid'
import Caregories from '../components/Categories/Categories'
import '../layouts/index.css'

class IndexPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      products: props.data.allProducts.edges,
      categories: props.data.allProducts.edges
    };
  }

  componentDidMount() {}

  render(props) {
    return (<div className="main">
        <Caregories  products={this.state.products}/>
        <ProductGrid  products={this.state.products}/>
    </div>)
  }
}

export default IndexPage;

export const query = graphql `
  query ProductsQuery {
      allProducts {
        edges {
          node {
            id
            name
            slug
            brand
            type
            image
            price
            size
            rating
          }
        }
      }
  }`;
