import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-4.jpg"

const Images = () => {
  return (
    <div>
      <h1>Hello from images.</h1>
      <section className="images">
        <article className="single-image">
          <h3>Basic Image</h3>
        </article>
        <article className="single-image">
          <h3>Fixed Image/Blurr</h3>
        </article>
        <article className="single-image">
          <h3>Fluid Image/SVG</h3>
        </article>
      </section>
    </div>
  )
}

export default Images
