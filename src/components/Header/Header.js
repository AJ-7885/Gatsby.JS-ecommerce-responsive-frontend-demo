import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="header"
    // style={{
    //   background: 'rebeccapurple',
    //   marginBottom: '1.45rem',
    // }}
  >
    <div
      // style={{
      //   margin: '0 auto',
      //   maxWidth: 1200,
      //   padding: '1.45rem 1.0875rem',
      // }}
    >
      <h1
        // style={{ margin: 0 }}
         className="heading">
        <Link
          to="/"
          // style={{
          //   color: 'white',
          //   textDecoration: 'none',
          // }}
        >
          MSC E-Shop
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
