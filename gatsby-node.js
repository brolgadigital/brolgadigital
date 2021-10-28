const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve('src/templates/blogTemplate.js')
    const projectPageTemplate = path.resolve('src/templates/projectTemplate.js')

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
        if(node.frontmatter.layout === 'blog') {
            createPage({
                path: node.frontmatter.layout + '/' + node.frontmatter.path,
                component: blogPostTemplate,
                context: {
                    pagePath: node.frontmatter.path,
                },
            })
        }
        else {
            createPage({
                path: node.frontmatter.layout + '/' + node.frontmatter.path,
                component: projectPageTemplate,
                context: {
                    pagePath: node.frontmatter.path,
                },
            })
        }
    })
}

const { fmImagesToRelative } = require('gatsby-remark-relative-images-v2')

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}