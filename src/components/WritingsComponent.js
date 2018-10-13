import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

export default props => {
  return (
    <div className="link">
      <div className="date">
        <Link to={props.post.fields.slug}>{props.post.frontmatter.date}</Link>
        {props.post.frontmatter.tags.map(tag => (
          <Link to={`/tags/${kebabCase(tag)}/`} key={tag}>
            #{tag}
          </Link>
        ))}
      </div>
      <h3 className="link--title">
        <a href={props.post.frontmatter.url}>{props.post.frontmatter.title}</a>
      </h3>
      <div className="description">{props.post.frontmatter.description}</div>
    </div>
  )
}
