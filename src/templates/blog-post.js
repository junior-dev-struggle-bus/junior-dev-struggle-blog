import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/blogpost/Sidebar"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    return (
<div>
      <div id="page-wrapper">

      {/* <!-- Header --> */}
      <section id="header">
          <div className="container">

              {/* <!-- Logo --> */}
              <h1 id="logo"><a href="index.html">Strongly Typed</a></h1>
              <p>A responsive HTML5 site template. Manufactured by HTML5 UP.</p>

              {/* <!-- Nav --> */}
              <nav id="nav">
                  <ul>
                      <li><a className="icon solid fa-home" href="index.html"><span>Introduction</span></a></li>
                      <li>
                          <a href="#" className="icon fa-chart-bar"><span>Dropdown</span></a>
                          <ul>
                              <li><a href="#">Lorem ipsum dolor</a></li>
                              <li><a href="#">Magna phasellus</a></li>
                              <li><a href="#">Etiam dolore nisl</a></li>
                              <li>
                                  <a href="#">Phasellus consequat</a>
                                  <ul>
                                      <li><a href="#">Magna phasellus</a></li>
                                      <li><a href="#">Etiam dolore nisl</a></li>
                                      <li><a href="#">Phasellus consequat</a></li>
                                  </ul>
                              </li>
                              <li><a href="#">Veroeros feugiat</a></li>
                          </ul>
                      </li>
                      <li><a className="icon solid fa-cog" href="left-sidebar.html"><span>Left Sidebar</span></a></li>
                      <li><a className="icon solid fa-retweet" href="right-sidebar.html"><span>Right Sidebar</span></a></li>
                      <li><a className="icon solid fa-sitemap" href="no-sidebar.html"><span>No Sidebar</span></a></li>
                  </ul>
              </nav>

          </div>
      </section>

      {/* <!-- Main --> */}
      <section id="main">
          <div className="container">
              <div className="row">
                  <Sidebar />
                  {/* <!-- Content --> */}
                  <div id="content" className="col-8 col-12-medium imp-medium">

                      {/* <!-- Post --> */}
                      <article className="box post">
                          <header>
                              <h2>Behold! This is the <strong>left sidebar</strong> layout<br />
                                  with a sidebar on the left!</h2>
                          </header>
                          <span className="image featured"><img src="images/pic04.jpg" alt="" /></span>
                          <h3>Left is the opposite of right</h3>
                          <p>Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit
                          ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris
                          sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada
                          in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
                          magna tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros
                          consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
                          justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet
                          mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique.
                                      Curabitur leo nibh, rutrum eu malesuada in tristique</p>
                          <p>Erat lorem ipsum veroeros consequat magna tempus lorem ipsum consequat
                          Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit ligula
                          vel quam viverra sit amet mollis tortor congue. Sed quis mauris sit amet
                          magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada in,
                          tristique at erat. Curabitur leo nibh, rutrum eu malesuada in, tristique
                          at erat lorem ipsum dolor sit amet lorem ipsum sed consequat magna
                          tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros consequat
                                      magna tempus</p>
                          <p>Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit
                          ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris
                          sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada
                          in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
                          consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
                          in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
                          magna tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros
                          consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
                          justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet
                          mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique.
                                      Curabitur leo nibh, rutrum eu malesuada in tristique</p>
                          <h3>Accumsan lorem ipsum veroeros</h3>
                          <p>Consequat Phasellus laoreet massa id in, tristique at erat lorem
                          ipsum dolor sit amet lorem ipsum sed consequat magna tempus veroeros
                          consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
                          justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet
                                      mollis tortor congue. Sed quis mauris sit amet magna.</p>
                          <p>Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit
                          ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris
                          sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada
                          in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
                          consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
                          in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
                          magna tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros
                          consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
                          justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet
                          mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique.
                                      Curabitur leo nibh, rutrum eu malesuada in tristique</p>
                          <h3>Ligula suspcipit fusce veroeros</h3>
                          <p>Nullam dolore etiam sed massa id in, tristique at erat lorem
                          ipsum dolor sit amet lorem ipsum sed consequat magna tempus veroeros
                          consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
                          justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet
                                      mollis tortor congue. Sed quis mauris sit amet magna.</p>
                          <p>Sed massa id justo mattis pharetra. Fusce suscipit
                          ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris
                          sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada
                          in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
                          consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
                          in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
                          magna tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros
                          consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
                          justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet
                                      mollis tortor congue. Sed quis mauris sit amet magna accumsan.</p>
                      </article>

                  </div>

              </div>
          </div>
      </section>

      {/* <!-- Footer --> */}
      <section id="footer">
          <div className="container">
              <header>
                  <h2>Questions or comments? <strong>Get in touch:</strong></h2>
              </header>
              <div className="row">
                  <div className="col-6 col-12-medium">
                      <section>
                          <form method="post" action="#">
                              <div className="row gtr-50">
                                  <div className="col-6 col-12-small">
                                      <input name="name" placeholder="Name" type="text" />
                                  </div>
                                  <div className="col-6 col-12-small">
                                      <input name="email" placeholder="Email" type="text" />
                                  </div>
                                  <div className="col-12">
                                      <textarea name="message" placeholder="Message"></textarea>
                                  </div>
                                  <div className="col-12">
                                      <a href="#" className="form-button-submit button icon solid fa-envelope">Send Message</a>
                                  </div>
                              </div>
                          </form>
                      </section>
                  </div>
                  <div className="col-6 col-12-medium">
                      <section>
                          <p>Erat lorem ipsum veroeros consequat magna tempus lorem ipsum consequat Phaselamet
                          mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique. Curabitur
                              leo nibh, rutrum eu malesuada.</p>
                          <div className="row">
                              <div className="col-6 col-12-small">
                                  <ul className="icons">
                                      <li className="icon solid fa-home">
                                          1234 Somewhere Road<br />
                                          Nashville, TN 00000<br />
                                          USA
                                          </li>
                                      <li className="icon solid fa-phone">
                                          (000) 000-0000
                                          </li>
                                      <li className="icon solid fa-envelope">
                                          <a href="#">info@untitled.tld</a>
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-6 col-12-small">
                                  <ul className="icons">
                                      <li className="icon brands fa-twitter">
                                          <a href="#">@untitled</a>
                                      </li>
                                      <li className="icon brands fa-instagram">
                                          <a href="#">instagram.com/untitled</a>
                                      </li>
                                      <li className="icon brands fa-dribbble">
                                          <a href="#">dribbble.com/untitled</a>
                                      </li>
                                      <li className="icon brands fa-facebook-f">
                                          <a href="#">facebook.com/untitled</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </section>
                  </div>
              </div>
          </div>
          <div id="copyright" className="container">
              <ul className="links">
                  <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
              </ul>
          </div>
      </section>

  </div>



      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          author={post.frontmatter.author}
        />
        <h2 id="title">
          {post.frontmatter.title}
        </h2>
        <p>
        {post.frontmatter.author} - 
        {post.frontmatter.date} 
        </p>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
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
      </Layout>
      </div>
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
