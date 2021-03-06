const path = require("path");
const { escape } = require("querystring");

const crypto = require("crypto");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve("src/templates/blogTemplate.js");
    const categoryPageTemplate = path.resolve(
        "src/templates/categoryTemplate.js"
    );
    const projectPageTemplate = path.resolve(
        "src/templates/projectTemplate.js"
    );
    const downloadPageTemplate = path.resolve(
        "src/templates/downloadTemplate.js"
    );
    const pageTemplate = path.resolve("src/templates/pageTemplate.js");

    const result = await graphql(`
        {
            allStrapiPost(sort: { order: DESC, fields: publishDate }) {
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
                        slug
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
            path: "blog/" + node.slug,
            component: blogPostTemplate,
            context: {
                pagePath: node.slug,
            },
        });
    });

    // PORTFOLIO PROJECT PAGES
    result.data.allStrapiProject.edges.forEach(({ node }) => {
        createPage({
            path: "portfolio/" + node.slug,
            component: projectPageTemplate,
            context: {
                pagePath: node.slug,
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
