---
title: An Introduction to the Junior Dev Struggle Blog
date: "2019-07-27T22:12:03.284Z"
description: An Introduction to the Junior Dev Struggle Blog
author: Nate Spilman
---

The Junior Dev Struggle Blog is live!!
The Junior Dev Struggle Blog is a place to put helpful content for the Junior Dev Struggle Bus community to reference and grow better from. 

![](https://media.giphy.com/media/dQpUkK59l5Imxsh8jN/giphy.gif)

### The Tech Stack 
The Junior Dev Struggle Blog is built in [Gatsby](https://www.gatsbyjs.org/), a free and open source static site generation framework based on React. When Gatsby "Builds", it generates HTML files based on Markdown (.md) files. This keeps it simple for authors to write, collaborate and share posts, as the process is as simple as creating or updating a Markdown file. 

The data on the site is stored via a file system instead of a database, and uses [GraphQL](https://graphql.org/). 

#### Resources on the Tech Stack 
 * [Gatsby Crash Course - Traversy Media](https://www.youtube.com/watch?v=6YhqQ2ZW1sc)
 * [Mastering Markdown - Wes Bos](https://www.youtube.com/watch?v=8YC4kw9w89E)
 * [What is GraphQL? - Scott Tolinski](https://www.youtube.com/watch?v=VjXb3PRL9WI&t=495s)

The blog itself started as a clone of Kyle Mathews' [gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/).

### The Ten Thousand Foot View of How It Works 
#### The Blog Itself
The website is developed using the [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start). Its Github repo is [here](https://github.com/junior-dev-struggle-bus/junior-dev-struggle-blog), and it is hosted on [Netlify](https://www.netlify.com/). 

#### The Basics of the Gatsby Build
The starter template from which we cloned did some of the heavy lifting for us. I'm going to go over the starter stuff that we in the repo currently - if you spin un a new Gatsby application (gatsby new mynewapplication), you'll be missing some of this code. Below you'll see the files and directories. 

![](./directoriesAndFiles.png)

#### The Files 

##### gatsby-browser.js
https://github.com/junior-dev-struggle-bus/junior-dev-struggle-blog/blob/master/gatsby-browser.js
This file is used to import fonts and css.

##### gatsby-config.js
https://github.com/junior-dev-struggle-bus/junior-dev-struggle-blog/blob/master/gatsby-config.js
This is the main settings file of the application. In the screenshot below you can see the site's metadata, which can be accessed via GraphQL from anywhere on the site. You can also see file directories for our blog posts and assets (think static images), which are then used in assembly. 

![](./gatsbyConfig.png)

##### gatsby-node.js
https://github.com/junior-dev-struggle-bus/junior-dev-struggle-blog/blob/master/gatsby-node.js
This is the assembly code that takes the files from the file path established using the 'gatsby-source-filesystem' plugin in the gatsby-config.js and uses them to build the site. More specifics on this in posts to come. 

## How to Write a Post
In the gatsby-config.js file, we've set the '/content/blog/' directory to be our blog post repo, using the `gatsby-source-filesystem` plugin. 

![](./blogFilesystem.png)

Every new folder within the `/blog/` directory will be interpretted as a new blog post. Within each folder, there must be an `index.md` file. the 'index.md' file is your all the blog post content lives.  

#### The Markdown File
The markdown file has two sections - the header and the body. The metadata for the post lives in the header, and the actual post itself lives in the body. The head of this post's .md life is below. For more information on how markdown syntax is built into HTML, see the [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

This post's markdown file lives [here](https://github.com/junior-dev-struggle-bus/junior-dev-struggle-blog/blob/master/content/blog/thetechbehindtheblog/index.md)



