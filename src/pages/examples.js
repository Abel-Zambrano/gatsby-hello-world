import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const examples = props => {
  return (
    <Layout>
      <h1>Hello! This is the examples page.</h1>
      <Header />
      <HeaderStatic />
      <h5>Age: {props.data.site.info.person.age}</h5>
    </Layout>
  )
}

export const data = graphql`
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

export default examples
