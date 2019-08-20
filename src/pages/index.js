import React from "react"
import { Link, graphql } from "gatsby"

// import Layout from "../../../src/components/layout"
// import SEO from "../../../src/components/seo"
import Post from "../components/homepage/Post"
import BoxExcerpt from "../components/homepage/BoxExcerpt"
import BoxHighlight from "../components/homepage/BoxHighlight"
import { Helmet } from "react-helmet"


// import { rhythm } from "../../../src/utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props

    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

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
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title> { siteTitle } </title>
        </Helmet>

        <div id="page-wrapper">
          <section id="header">
            <div className="container">
              <h1 id="logo">
                <a href="/">{ siteTitle }</a>
              </h1>
            </div>
          </section>

          <section id="main">
            <div className="container">
              <div className="row">
                <div id="content" className="col-8 col-12-medium">
                  {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    const { date, author }  = node.frontmatter
                    const excerpt = node.excerpt
                    const slug = node.fields.slug   

                    if (node.frontmatter.published) {
                      return (
                        <div key = { slug }>
                          <Post 
                          title = { title } 
                          date = { date } 
                          slug = { slug } 
                          author = { author }
                          excerpt = { excerpt }
                          />
                        </div>
                      )
                    }
                  })}

                </div>
                <div id="sidebar" className="col-4 col-12-medium">
                  <section>
                    <ul className="divided">
                    {boxExerpts.map(
                      exerpt => {
                      const {title,url, content} = exerpt
                        return (
                      <li>
                          <BoxExcerpt 
                          title = {title}
                          link = {url}
                          content = {content}
                          key = { title }
                           />
                      </li>                        
                        )
                      }
                    )}
                    </ul>
                  </section>
                </div>
                <div id="copyright" className="container">
                    <ul className="links">
                      <li>&copy; Junior Dev Struggle Bus. All rights reserved.</li>
                      <li>
                        Design: <a href="http://html5up.net">HTML5 UP</a>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
            description
            published
          }
        }
      }
    }
  }
`
