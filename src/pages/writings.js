import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Writings from '../components/WritingsComponent'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
          <h1>書いたもの</h1>
            {posts.map(({ node: post }) => (
              <Writings post={post} key={post.id} />
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}


export const pageQuery = graphql`
  query AllWritings {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "writings" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            url
            tags
            title
            description
            templateKey
            date(formatString: "YYYY.MM.DD")
          }
        }
      }
    }
  }
`
