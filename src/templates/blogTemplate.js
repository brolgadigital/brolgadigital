import React from "react";
import { graphql } from "gatsby";
// import SeoWithQuery from '../components/seo/seo'
import { Helmet } from "react-helmet";
import Headers from "../components/Headers";
import Head from "../components/Head";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import moment from "moment";

const Template = ({ data }) => {

    return (
        <>
            <Helmet
                isBlogPost={true}
                // imageMeta={
                //     post.frontmatter.thumbnail.childImageSharp.original.src
                // }
                meta={[
                    {
                        name: "description",
                        content: data.strapiPost.description || data.strapiPost.excerpt,
                    },
                    // {
                    //     name: "image",
                    //     content:
                    //         post.frontmatter.thumbnail.childImageSharp.original
                    //             .src,
                    // },
                    { name: "datePublished", content: data.strapiPost.publishDate },
                ]}
            ></Helmet>
            <Head title={data.strapiPost.title} />

            <Headers title={data.strapiPost.title} subtitle={moment(data.strapiPost.publishDate).format('MMMM Do YYYY')}/>

            <MDXProvider>
                <MDXRenderer>{data.strapiPost.body.data.childMdx.body}</MDXRenderer>
            </MDXProvider>
        </>
    );
};

export default Template;

export const pageQuery = graphql`
    query BlogPostByPath($pagePath: String) {
        strapiPost(slug: { eq: $pagePath }) {
            title
            slug
            publishDate
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