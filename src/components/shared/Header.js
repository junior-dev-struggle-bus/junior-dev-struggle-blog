import React from 'react'
import { Link } from "gatsby"

function Header({ title }) {
    return (
        <header>
            <section id="header">
                <div className="container">
                    <h1 id="logo">
                        <Link to="/">{title}</Link>
                    </h1>
                </div>
            </section>
        </header>
    )
}

export default Header
