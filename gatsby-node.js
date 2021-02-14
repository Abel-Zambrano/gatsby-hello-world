const path = require("path")

// create pages dynamically

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.products.nodes.forEach(products => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/template/product-template.js`),
      context: {
        slug: product.slug,
      },
    })
  })
}
