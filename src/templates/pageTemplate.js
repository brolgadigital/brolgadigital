import React from "react";
import { graphql } from "gatsby";
// import SeoWithQuery from '../components/seo/seo'
// import { Helmet } from "react-helmet";
import Head from "../components/Head";
import Headers from "../components/Headers";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Template = ({ data }) => {
    // const post = data.markdownRemark;
    // const page = data.site.siteMetadata;

    // const pageTitle = post.frontmatter.title + " || " + page.title;

    return (
        <div>
            <Head title={data.strapiPage.title} />

            <Headers title={data.strapiPage.title} />

            <MDXProvider>
                <MDXRenderer>{data.strapiPage.body.data.childMdx.body}</MDXRenderer>
            </MDXProvider>
        </div>
    );
};

export default Template;

export const pageQuery = graphql`
    query PageByPath($pagePath: String) {
        strapiPage(slug: { eq: $pagePath }) {
            title
            slug
            body {
                data {
                    childMdx {
                        body
                    }
                }
            }
        }
    }
`;
