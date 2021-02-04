import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="/blog/">Blog</link>
        </li>
        <li>
          <link to="/products/">Products</link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
