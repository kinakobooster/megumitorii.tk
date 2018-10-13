import React from 'react'
import Helmet from 'react-helmet'

import Namecard from '../components/namecard'

import './_main.sass'

const TemplateWrapper = ({ children }) => (
  <div className="contents--wrapper">
    <Helmet title="Home | megumitorii.tk" />
    <Namecard />
    <div>{children}</div>
    <footer>powered by Netlify CMS and Gatsby</footer>
  </div>
)

export default TemplateWrapper
