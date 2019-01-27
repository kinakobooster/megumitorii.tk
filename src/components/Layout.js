import React from 'react'
import Helmet from 'react-helmet'

import Namecard from '../components/namecard'
import favicon from './../img/favicon.ico';
import iOSIcon from './../img/icon-192x192.png';

import './_main.sass'

const TemplateWrapper = ({ children }) => (
  <div className="contents--wrapper">
    <Helmet title="megumitorii.tk"
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
        { rel: 'apple-touch-icon', href:`${iOSIcon}`, sizes:'192x192' }
        
  ]}/>
    <Namecard />
    <div>{children}</div>
    <footer>powered by Netlify CMS and Gatsby</footer>
  </div>
)

export default TemplateWrapper
