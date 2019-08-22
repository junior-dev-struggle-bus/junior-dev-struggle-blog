import React from "react"

class Post extends React.Component {
  render() {
    return (
      <article className="box post">
        <header style={{marginBottom:'2em'}}>
          <h2 style={{marginBottom:0}}>{this.props.title}</h2>
        {this.props.description}
          <h6>
            {this.props.author}
          </h6>
          <h6>
          {this.props.date}
          </h6>
        </header>
        {/* <span className="image featured">
          <img src="images/pic04.jpg" alt="" />
        </span> */}
        <div dangerouslySetInnerHTML={{ __html: this.props.body }} />
      </article>
    )
  }
}

export default Post
