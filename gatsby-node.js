const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve('src/templates/blogTemplate.js')

    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            date
                            path
                            title
                            layout
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        console.log(result.errors)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.layout + '/' + node.frontmatter.path,
            component: blogPostTemplate,
            context: {
                pagePath: node.frontmatter.path,
            },
        })
    })
}

// const { fmImagesToRelative } = require('gatsby-remark-relative-images')

// exports.onCreateNode = ({ node }) => {
//     fmImagesToRelative(node)
// }