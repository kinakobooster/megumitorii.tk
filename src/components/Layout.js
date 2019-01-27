import React from 'react'
import Helmet from 'react-helmet'

import Namecard from '../components/namecard'
import favicon from './../img/favicon.ico';

import './_main.sass'

const TemplateWrapper = ({ children }) => (
  <div className="contents--wrapper">
    <Helmet title="megumitorii.tk"
      link={[
      { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
  ]}/>
    <Namecard />
    <div>{children}</div>
    <footer>powered by Netlify CMS and Gatsby</footer>
  </div>
)

export default TemplateWrapper
