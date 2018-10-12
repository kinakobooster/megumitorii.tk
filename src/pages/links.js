import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Links from '../components/LinksComponent'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            {posts
              .map(({ node: post }) => (
                <Links post={post} />
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query AllLinks {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: {templateKey: {eq:"links"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            tags
            title
            full_image
            templateKey
            date(formatString: "YYYY.MM.DD")
          }
        }
      }
    }
  }
`