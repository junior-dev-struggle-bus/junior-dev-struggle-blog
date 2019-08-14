import React from "react"
import { Link } from "gatsby"

class Post extends React.Component {
  render() {
    const node = this.props.node
    const title = node.frontmatter.title || node.fields.slug
    if (node.frontmatter.published) {
      return (
        <article class="box post" style={{padding:"1em"}}>
          <header>
            <h2 style={{margin:'.2em'}}>
              <Link to={node.fields.slug}>{title}</Link>
            </h2>
            <small style={{margin:0}}>{node.frontmatter.date}</small>
          </header>
          <Link class="image featured">
            <img src={"https://source.unsplash.com/1600x900/?duck?sig=" + Math.floor(Math.random() * 1000)}alt="" />
          </Link>
          <p style={{margin:'.6em'}}
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
              <Link to={node.fields.slug} class="button icon solid fa-file">
                Continue Reading
              </Link>
        </article>
      )
    }
  }
}

export default Post
