import React from 'react'
import { StaticQuery, Link, graphql } from "gatsby"

import Search from './Search'

const Header = ({ title }) => (
    <StaticQuery 
        query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
        render={data => (
            <header>
                <section id="header">
                    <div className="container">
                        <h1 id="logo">
                            <Link to="/">{title}</Link>
                        </h1>
                        <Search searchIndex={data.siteSearchIndex.index}/>
                    </div>
                </section>
            </header>
        )}
    />
)

export default Header
