/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Hello World",
    description: "tutorial",
    author: "Abel Zambrano",
    data: ["product 1", "product 2", "product 3"],
    person: { name: "Nippy", age: 1 },
  },
  plugins: [`gatsby-plugin-styled-components`],
}
