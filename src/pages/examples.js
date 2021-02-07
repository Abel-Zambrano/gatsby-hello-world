import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/Layout"

const examples = () => {
  return (
    <Layout>
      <h1>Hello! This is the examples page.</h1>
      <Header />
      <HeaderStatic />
    </Layout>
  )
}

export default examples
