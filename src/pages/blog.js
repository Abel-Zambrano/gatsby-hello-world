import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <h1 className={styles.title}>This is the blog page.</h1>
      <p className={styles.text}>This is scoped red!</p>
    </Layout>
  )
}

export default blog
