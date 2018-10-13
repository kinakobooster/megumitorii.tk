import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Faq from '../components/FaqComponent'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
          <h1>よくある質問</h1>
            {posts.map(({ node: post }) => (
              <Faq post={post} key={post.id} />
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query AllFaqs {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "faq" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          html
          fields {
            slug
          }
          frontmatter {
            tags
            title
            templateKey
            date(formatString: "YYYY.MM.DD")
          }
        }
      }
    }
  }
`
