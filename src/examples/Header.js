import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          author
          data
          title
          person {
            age
            name
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>{data.site.siteMetadata.person.name}</h1>
    </div>
  )
}

export default Header
