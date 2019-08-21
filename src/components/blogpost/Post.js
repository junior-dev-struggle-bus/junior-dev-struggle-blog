import React from "react"

const Post = ({ title, author, description, date, body }) => {
  return (
    <article className="box post">
      <header>
        <h2>{title}</h2>
        <p>
          {author} - {date}
        </p>
      </header>
      {/* <span className="image featured">
      <img src="images/pic04.jpg" alt="" />
    </span> */}
      <p>{description}</p>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </article>
  )
}

export default Post
