import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const header = (

    <section id="header">
        <h1 id="logo">
          <Link to={`/`}>
            {title}
          </Link>
        </h1>
    </section>
      )
    
    return (
      <div style={{backgroundColor:'white'}}>
        <header>{header}</header>
        <div class="container">
        <main>{children}</main>
        <footer></footer>
        </div>
      </div>
    )
  }
}

export default Layout
