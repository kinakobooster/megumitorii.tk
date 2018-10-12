import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './_main.sass'

const TemplateWrapper = ({ children }) => (
  <div className='contents--wrapper'>
    <Helmet title="Home | megumitorii.tk" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
