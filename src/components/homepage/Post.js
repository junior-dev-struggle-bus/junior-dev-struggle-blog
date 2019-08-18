import React from "react"
import { Link } from "gatsby"

class Post extends React.Component {
  render() {
    const { date, excerpt, slug, title, author } = this.props;
      return (
        <article className="box post" style={{padding:"1em"}}>
          <header>
            <h2 style={{margin:'.2em'}}>
              <Link to={ slug }> { title } </Link>
            </h2>
            <small style={{margin:0}}>{ date }</small>
            <br/>
            <small style={{margin:0}}>{ author }</small>
          </header>
          <Link to = {slug} className="image featured" style={{marginBottom:".2em"}}>
            <img src={"https://source.unsplash.com/1600x900/?duck?sig=" + Math.floor(Math.random() * 1000)}alt="" />
          </Link>
          <p style={{margin:'1em'}}
            dangerouslySetInnerHTML={{
              __html: excerpt,
            }}
          />
              <Link to={ slug } className="button icon solid fa-file">
                Continue Reading
              </Link>
        </article>
      )
  }
}

export default Post
