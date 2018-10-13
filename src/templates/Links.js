import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const LinksTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
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

LinksTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const Links = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <LinksTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={<Helmet title={`${post.frontmatter.title} | FAQ`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

Links.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Links

export const pageQuery = graphql`
  query LinksByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        url
        date(formatString: "YYYY.MM.DD")
        title
        tags
      }
    }
  }
`
