// const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/article-post.js')
    resolve(
      graphql(
        `
          {
           
            allContentfulC01Hero{
                edges {
                  node {
                    title
                    title2
                    image {
                      file {
                        url
                      }
                      title
                      description
                    }
                    createdAt
                    id
                    labelLink
                    introduction
                    content {
                      raw
                    }
                    slug
                  }
                }
              }

          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulC01Hero.edges

        posts.forEach(post => {
          createPage({
            path: `/insights/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}