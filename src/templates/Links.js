import React from 'react'
import Link from 'gatsby'
import { kebabCase } from 'lodash'

export default (props)  => {
  return (
    <a href={props.post.frontmatter.url}>
      <div className='date'>
        {props.post.frontmatter.date}
        {props.post.frontmatter.tags.map(tag => (
         <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
        ))}
      </div>
      <h3 className = "link--title" > {
        props.post.frontmatter.title
      } </h3>
      <div className='description'>
          {props.post.frontmatter.description}
      </div>
    </a>
    )
  }