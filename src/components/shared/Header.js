import React from 'react'
import { StaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import Search from './Search'

const Header = ({ title }) => (
    <StaticQuery
    query={graphql`
    
        query SearchIndexQuery {
            siteSearchIndex {
                index
            }
            file(relativePath: {eq: "giticon.png"}) {
                childImageSharp {
                fixed(width:20,height:20) {
                    ...GatsbyImageSharpFixed
                }
                }
            
         }   }
    `}
    render={data => (
        <header>
            <section id="header">
                <div className="container">
                   
                    <h1 id="logo">
                        <a href="/">{title}</a> 
            <a href="https://github.com/junior-dev-struggle-bus/junior-dev-struggle-blog/issues/30"  title="GitHub"> 
                        <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
  /> </a>  
                       
                    </h1>
                        <Search searchIndex={data.siteSearchIndex.index}/>
                    </div>
                </section>
            </header>
        )}
    />
)

export default Header
