import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Project from '../components/ProjectComponent'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
          <h1>つくったもの</h1>
            {posts.map(({ node: post }) => (
              <Project post={post} key={post.id} />
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
  query AllProjects {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "projects" } } }
    ) {
      edges {
        node {
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
