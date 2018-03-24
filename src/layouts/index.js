import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './index.css'
import './style.scss'

const TemplateWrapper = ({children}) => (<div>
  <Helmet title="E-commerce responsive frontend demo" meta={[
      {
        name: 'description',
        content: 'This is e-commerce responsive frontend demo.'
      }, {
        name: 'keywords',
        content: 'ecommerce, responsive,frontend,demo'
      }
    ]}/> {/* <div style={{
      margin: '0 auto',
      maxWidth: 1200,
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0
    }}> */
  }

  <div className="wrapper">
    <Header/> {children()}
    <Footer/>
  </div>

</div>)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
