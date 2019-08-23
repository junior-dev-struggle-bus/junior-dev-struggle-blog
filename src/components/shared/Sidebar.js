import React from "react"
import BoxExcerpt from "./BoxExcerpt"

class Sidebar extends React.Component {
  render() {
    const { boxExerpts } = this.props;
    console.log(this.props)
      return (
        <div id="sidebar" className="col-4 col-12-medium">
        <section>
          <ul className="divided">
          {boxExerpts.map(
            exerpt => {
            const {title,url, content} = exerpt
              return (
            <li>
                <BoxExcerpt 
                title = {title}
                link = {url}
                content = {content}
                key = { title }
                 />
            </li>                        
              )
            }
          )}
          </ul>
        </section>
      </div>
      )
  }
}

export default Sidebar
