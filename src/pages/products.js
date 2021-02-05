import React from "react"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"

const products = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Products Page</h1>
      <p className={styles.text}>Buy something....?</p>
    </Layout>
  )
}

export default products
