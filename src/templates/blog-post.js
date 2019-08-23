import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/shared/Sidebar"
import Post from "../components/blogpost/Post"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const boxExerpts = [
      {
        title:"juniordevstrugglebus.com",
        url:"https://juniordevstrugglebus.com",
        content:"Visit the Junior Dev Struggle Bus website for more information on the organzation, and opportunities to contribute to the community!"
      },
      {
        title:"algorithms-anon.org",
        url:"https://algorithms-anon.org",
        content:"Keep your mind sharp with regular community written algorithm challenges. Join the message board and engage in brain teasers or solve for function of Big O. "
      },
      {
        title:"The Slack Channel",
        url:"http://juniordevstrugglebus.com/slack",
        content:"Our Slack channel is the community's main platform of communication. In addition, we have community build bot applications, and lots of development opportunity."

      },
      {
        title:"The Meetup Group",
        url:"https://www.meetup.com/The-Junior-Dev-Struggle-Bus",
        content:"The Junior Dev Struggle Bus posts regular meetings in Seattle, WA on Meetup.com. Come hang out, learn a few things and teach us a few things."

      }
    ]

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          author={post.frontmatter.author}
        />

        <div id="page-wrapper">
          {/* <!-- Header --> */}

          {/* <!-- Main --> */}
          <section id="main">
            <div className="container">
              <div className="row">
              <Sidebar boxExerpts={boxExerpts}/>

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
