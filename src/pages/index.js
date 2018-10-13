import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Project from '../components/ProjectComponent'
import Links from '../components/LinksComponent'
import Faq from '../components/FaqComponent'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: projestPosts } = data.projects
    const { edges: faqPosts } = data.faqs
    const { edges: linkPosts } = data.links

    return (
      <Layout>
        <section className="section">
          <div className="container">
            {/* Projects */}
            <div className="box-wrapper">
              {projestPosts.map(({ node }) => (
                <Project post={node} key={node.id} />
              ))}
            </div>
            <Link className="more-link" to="./projects">
              More Projects >
            </Link>

            {/* Links */}
            <div className="links-wrapper">
              {linkPosts.map(({ node }) => (
                <Links post={node} key={node.id} />
              ))}
              <Link className="more-link" to="./links">
                More Writings >
              </Link>
            </div>

            {/* FAQ */}
            <div className="faq-wrapper">
              {faqPosts.map(({ node }) => (
                <Faq post={node} key={node.id} />
              ))}
            </div>
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
    links: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "links" } } }
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
      sort: { order: DESC, fields: [frontmatter___date] }
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
