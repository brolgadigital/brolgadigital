const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve("src/templates/blogTemplate.js");
    const projectPageTemplate = path.resolve(
        "src/templates/projectTemplate.js"
    );
    const downloadPageTemplate = path.resolve("src/templates/downloadTemplate.js");

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
    `);

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        console.log(result.errors);
        return;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.layout === "blog") {
            createPage({
                path: node.frontmatter.layout + "/" + node.frontmatter.path,
                component: blogPostTemplate,
                context: {
                    pagePath: node.frontmatter.path,
                },
            });
        }
        if (node.frontmatter.layout === "download") {
            createPage({
                path: "resources/" + node.frontmatter.path,
                component: downloadPageTemplate,
                context: {
                    pagePath: node.frontmatter.path,
                }
            });
        }
        if (node.frontmatter.layout === "portfolio") {
            createPage({
                path: node.frontmatter.layout + "/" + node.frontmatter.path,
                component: projectPageTemplate,
                context: {
                    pagePath: node.frontmatter.path,
                },
            });
        }
    });
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    createTypes(`
        type MarkdownRemark implements Node {
            frontmatter: Frontmatter
        }
        type Frontmatter {
            thumbnail: File @fileByRelativePath
            download: File @fileByRelativePath
            infobox1: InfoBox1
            infobox2: InfoBox2
            infobox3: InfoBox3
            infobox4: InfoBox4
        }


        type InfoBox1 {
            display: Boolean!
            icon: String
            boxtitle: String
            blurb: String
        }
        type InfoBox2 {
            display: Boolean!
            icon: String
            boxtitle: String
            blurb: String
        }
        type InfoBox3 {
            display: Boolean!
            icon: String
            boxtitle: String
            blurb: String
        }
        type InfoBox4 {
            display: Boolean!
            icon: String
            boxtitle: String
            blurb: String
        }
    `);
};
