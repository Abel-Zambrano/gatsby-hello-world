import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          name
          age
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>This our GrapgQL example in Heading component.</h1>
      {/* <h2>Title: {data.site.siteMetadata.title}</h2>
      <h2>Author: {data.site.siteMetadata.author}</h2> */}
      <h2>Title: {title}</h2>
      <h2>Name: {name}</h2>
    </div>
  )
}

export default Header
