import React from "react"
import { Link } from "gatsby"

class BoxHighlight extends React.Component {
  render() {
    const { title, content, img } = this.props
      return (
        <article className="box highlight">
        <header>
          <h3>
            <a href="#">{title}</a>
          </h3>
        </header>
        <a href="#" className="image left">
          <img src={img} alt="images/pic06.jpg" />
        </a>
        <p>
          {content}
        </p>
        <ul className="actions">
          <li>
            <a href="#" className="button icon solid fa-file">
              Learn More
            </a>
          </li>
        </ul>
      </article>
      )
    }
}

export default BoxHighlight
