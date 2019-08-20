import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/blogpost/Sidebar"
import Post from "../components/blogpost/Post"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          author={post.frontmatter.author}
        />

        <div id="page-wrapper">
          {/* <!-- Header --> */}
          <section id="header">
            <div className="container">
              {/* <!-- Logo --> */}
              <h1 id="logo">
                <a href="index.html">Junior Dev Struggle Blog</a>
              </h1>
            </div>
          </section>

          {/* <!-- Main --> */}
          <section id="main">
            <div className="container">
              <div className="row">
                <Sidebar />
                {/* <!-- Content --> */}
                <div id="content" className="col-8 col-12-medium imp-medium">
                  <Post
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerp}
                    body={post.html}
                    author={post.frontmatter.author}
                    date={post.frontmatter.date}
                  />
                  <ul
                    style={{
                      display: `flex`,
                      flexWrap: `wrap`,
                      justifyContent: `space-between`,
                      listStyle: `none`,
                      padding: 0,
                    }}
                  >
                    <li>
                      {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                          ← {previous.frontmatter.title}
                        </Link>
                      )}
                    </li>
                    <li>
                      {next && (
                        <Link to={next.fields.slug} rel="next">
                          {next.frontmatter.title} →
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        tags
      }
    }
  }
`
