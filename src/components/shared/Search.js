import React, { useState } from 'react'
import { Index } from 'elasticlunr'
import { Link } from 'gatsby'

function Search({ searchIndex }) {

    let index;
    const [query, setQuery] = useState(``)
    const [results, setResults] = useState([])

    const getOrCreateIndex = () => {
        return index
            ? index
            : // Create an elastic lunr index and hydrate with graphql query results
            Index.load(searchIndex)
    }

    const search = (e) => {
        setQuery(e.target.value)
        index = getOrCreateIndex();
        let resultsArr = index.search(e.target.value, { expand: true })
        setResults(resultsArr.map(({ ref }) => {
            return index.documentStore.getDoc(ref)
        }))
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={search}
            />
            <ul>
                {results.map(page => (
                    <li key={page.id} style={{listStyle:"none"}}>
                        <Link to={page.slug}>{page.title}</Link>
                        <b> author: </b> {page.author}
                        {page.tags &&
                        <span>
                            <b> - tags: </b> {page.tags.join(`, `)}
                        </span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search
