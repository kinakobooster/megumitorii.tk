import React from 'react'
import { Link } from 'gatsby'
import { HTMLContent } from '../components/Content'

export default props => {
  return (
    <div className="faq">
      <h3 className="faq--title">
        <Link to={props.post.fields.slug}>{props.post.frontmatter.title}</Link>
      </h3>
      <div className="faq--answer">
        <HTMLContent content={props.post.html} />
      </div>
    </div>
  )
}
