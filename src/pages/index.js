import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Project from '../components/ProjectComponent'
import Writings from '../components/WritingsComponent'
import Faq from '../components/FaqComponent'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: projestPosts } = data.projects
    const { edges: faqPosts } = data.faqs
    const { edges: linkPosts } = data.writings

    return (
      <Layout>
        <div className="container">
          <section className="section">
              {/* FAQ */}
              <div className="faq-wrapper">
                {faqPosts.map(({ node }) => (
                  <Faq post={node} key={node.id} />
                ))}
              <Link className="more-link" to="./faq">
                  とりいへ100の質問 >
              </Link>
              </div>
            </section>
            <section className="section">
            {/* Projects */}
            <div className="box-wrapper">
              {projestPosts.map(({ node }) => (
                <Project post={node} key={node.id} />
              ))}
            </div>
            <Link className="more-link" to="./projects">
              More Projects >
            </Link>

            {/* Writings */}
            <div className="writings-wrapper">
              {linkPosts.map(({ node }) => (
                <Writings post={node} key={node.id} />
              ))}
              <Link className="more-link" to="./writings">
                More Writings >
              </Link>
            </div>
         </section>
        </div>
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
  query IndexQuery {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "projects" } } }
      limit: 3
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY.MM.DD")
            full_image
          }
        }
      }
    }
    writings: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "writings" } } }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            url
            tags
            title
            templateKey
            date(formatString: "YYYY.MM.DD")
            description
          }
        }
      }
    }
    faqs: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "faq" } } }
      limit: 3
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            tags
            templateKey
            date(formatString: "YYYY.MM.DD")
          }
        }
      }
    }
  }
`
