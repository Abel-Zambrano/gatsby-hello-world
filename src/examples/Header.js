import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        data
        description
        title
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(getData)
  console.log(data)

  return (
    <div>
      <h1>This our GrapgQL example in Heading component.</h1>
    </div>
  )
}

export default Header
