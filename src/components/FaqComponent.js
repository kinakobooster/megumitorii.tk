import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'
import Content, { HTMLContent } from '../components/Content'

export default props => {
  return (
    <div className="faq">
      <div className="date">
        <Link to={props.post.fields.slug}>{props.post.frontmatter.date}</Link>
        {props.post.frontmatter.tags.map(tag => (
          <Link to={`/tags/${kebabCase(tag)}/`} key={tag}>
            #{tag}
          </Link>
        ))}
      </div>
      <h3 className="Faq--title">{props.post.frontmatter.title}</h3>
      <div className="Faq--answer">
        <HTMLContent content={props.post.html} />
      </div>
    </div>
  )
}
