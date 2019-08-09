import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Post from "../components/blogpost/Post"

class Sandbox extends React.Component {
  render() {
      return(
<Post/>
      )
      }
}

export default Sandbox

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
