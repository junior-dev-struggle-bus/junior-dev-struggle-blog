import React from "react"
import { Link } from "gatsby"

class BoxExcerpt extends React.Component {
  render() {
    const { title, content, link} = this.props
      return (
        <article className="box excerpt">
        <header>
          <h3>
            <a href={link}>{title}</a>
          </h3>
        </header>
        <p>
          {content}
        </p>
      </article>
      )
    }
}

export default BoxExcerpt
