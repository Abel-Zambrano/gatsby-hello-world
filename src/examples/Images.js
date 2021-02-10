import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-4.jpg"
import "./images.css"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          src
        }
      }
    }
    fluid: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

const Images = () => {
  return (
    <div>
      <h1 className="images-title">Hello from Images</h1>
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
