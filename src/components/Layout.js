import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Namecard from '../components/namecard'

import './_main.sass'

const TemplateWrapper = ({ children }) => (
  <div className='contents--wrapper'>
    <Helmet title="Home | megumitorii.tk" />
    <Namecard />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
