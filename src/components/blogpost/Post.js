import React from "react"

class Post extends React.Component {
  render() {
    return (
      <article className="box post">
        <header>
          <h2>{this.props.title}</h2>
          <p>
            {this.props.author} - {this.props.date}
          </p>
        </header>
        {/* <span className="image featured">
          <img src="images/pic04.jpg" alt="" />
        </span> */}
        <p>{this.props.description}</p>
        <div dangerouslySetInnerHTML={{ __html: this.props.body }} />
      </article>
    )
  }
}

export default Post
