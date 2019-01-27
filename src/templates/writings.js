import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const WritingsTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
  url,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              <a href={url}>{title}</a>
            </h1>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>#{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

const Writings = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WritingsTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={<Helmet title={`${post.frontmatter.title} | Writings`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        url={post.frontmatter.url}
      />
    </Layout>
  )
}

Writings.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Writings

export const pageQuery = graphql`
  query WritingsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        tags
        url
      }
    }
  }
`
