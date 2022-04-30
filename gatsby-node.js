const path = require("path");
const { escape } = require("querystring");

const crypto = require('crypto');

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve("src/templates/blogTemplate.js");
    const categoryPageTemplate = path.resolve("src/templates/categoryTemplate.js");
    const projectPageTemplate = path.resolve(
        "src/templates/projectTemplate.js"
    );
    const downloadPageTemplate = path.resolve("src/templates/downloadTemplate.js");
    const pageTemplate = path.resolve("src/templates/pageTemplate.js");

    const result = await graphql(`
        {
            allStrapiPost(sort: {order: DESC, fields: PublishDate}) {
                edges {
                    node {
                        id
                        title
                        PublishDate
                        slug
                        categories {
                            slug
                        }
                    }
                }
            }
            allStrapiCategory {
                edges {
                    node {
                        slug
                    }
                }
            }
            allStrapiTag {
                edges {
                    node {
                        name
                    }
                }
            }
            allStrapiProject {
                edges {
                    node {
                        Slug
                    }
                }
            }
            allStrapiPage {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        console.log(result.errors);
        return;
    }

    // BLOG POST PAGES
    result.data.allStrapiPost.edges.forEach(({ node }) => {
        createPage({
            path: "blog/" + node.categories[0].slug + '/' + node.slug ,
            component: blogPostTemplate,
            context: {
                pagePath: node.slug,
            },
        });
    });

    // BLOG CATEGORY PAGES
    result.data.allStrapiCategory.edges.forEach(({ node }) => {
        createPage({
            path: "blog/" + node.slug,
            component: categoryPageTemplate,
            context: {
                pagePath: node.slug,
            },
        });
    });

    // BLOG TAG PAGES
    result.data.allStrapiTag.edges.forEach(({ node }) => {
        let slug = node.name.replaceAll(/\//g, '-').replaceAll(' ', '-').toLowerCase()
        createPage({
            path: "blog/tag/" + escape(slug),
            component: categoryPageTemplate,
            context: {
                pagePath: node.name,
            },
        });
    });

    // PORTFOLIO PROJECT PAGES
    result.data.allStrapiProject.edges.forEach(({ node }) => {
        createPage({
            path: "portfolio/" + node.Slug,
            component: projectPageTemplate,
            context: {
                pagePath: node.Slug,
            },
        });
    });

    // ADDITIONAL PAGES
    result.data.allStrapiPage.edges.forEach(({ node }) => {
        createPage({
            path: node.slug,
            component: pageTemplate,
            context: {
                pagePath: node.slug,
            },
        });
    });
};

exports.onCreateNode = async ({ node, actions, createNodeId }) => {
    if (
        node.internal.type === "STRAPI_POST" ||
        node.internal.type === "STRAPI_PAGE" ||
        node.internal.type === "STRAPI_PROJECT"
    ) {
        const newNode = {
            ...node,
            id: createNodeId(node.id),
            parent: node.id,
            children: [],
            internal: {
                content: node.content || " ",
                type: "StrapiMDX",
                mediaType: "text/markdown",
                contentDigest: crypto
                    .createHash("md5")
                    .update(node.content || " ")
                    .digest("hex"),
            },
        };
        actions.createNode(newNode);
        actions.createParentChildLink({
            parent: node,
            child: newNode,
        });
    }
};