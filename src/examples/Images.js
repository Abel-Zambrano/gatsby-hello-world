import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-4.jpg"
import "./images.css"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fixed(width: 600, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)

  return (
    <div>
      <h1 className="images-title">Hello from Images</h1>
      <section className="images">
        <article className="single-image">
          <h3>Basic Image</h3>
          <img src={img} alt="Basic" width="600px" height="400px" />
        </article>
        <article className="single-image">
          <h3>Fixed Image/Blurr</h3>
          <Image fixed={data.fixed.childImageSharp.fixed} />
        </article>
        <article className="single-image">
          <h3>Fluid Image/SVG</h3>
          <Image fluid={data.fluid.childImageSharp.fluid} />
        </article>
      </section>
    </div>
  )
}

export default Images
