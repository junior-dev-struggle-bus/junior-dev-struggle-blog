import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import Header from "./shared/Header"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div style={{ backgroundColor: 'white' }}>
        <Header title={title} />
        <main>{children}</main>
        <footer></footer>
      </div>
    )
  }
}

export default Layout
