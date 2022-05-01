import React from "react";
import { graphql } from "gatsby";
// import SeoWithQuery from '../components/seo/seo'
import { Helmet } from "react-helmet";
import Headers from "../components/Headers";
import Head from "../components/Head";

const Template = ({ data }) => {

    return (
        <>
            <Helmet
                isBlogPost={true}
                imageMeta={
                    post.frontmatter.thumbnail.childImageSharp.original.src
                }
                meta={[
                    {
                        name: "description",
                        content: post.frontmatter.description || post.excerpt,
                    },
                    {
                        name: "image",
                        content:
                            post.frontmatter.thumbnail.childImageSharp.original
                                .src,
                    },
                    { name: "datePublished", content: post.frontmatter.date },
                ]}
            ></Helmet>
            <Head title={data.strapiPost.title} />

            <Headers title={data.strapiPost.title} subtitle={data.strapiPost.publishDate}/>

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