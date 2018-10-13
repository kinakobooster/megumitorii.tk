import React from 'react'
import { Link } from 'gatsby'

export default props => {
  return (
    <Link to={props.post.fields.slug}>
      <div
        className="square-box"
        style={{ backgroundImage: `url(${props.post.frontmatter.full_image})` }}
      >
        <div className="square-box--text">
          <div className="date">{props.post.frontmatter.date}</div>
          <h3>{props.post.frontmatter.title}</h3>
        </div>
      </div>
    </Link>
  )
}
