import React from "react";
import { graphql } from "gatsby";
// import SeoWithQuery from '../components/seo/seo'
import { Helmet } from "react-helmet";
import Headers from "../components/Headers";

const Template = ({ data }) => {
    const post = data.markdownRemark;
    const page = data.site.siteMetadata;

    const pageTitle = post.frontmatter.title + " || " + page.title;

    return (
        <>
            <Helmet
                title={pageTitle}
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

            <div className="blog-post-container">
                <div className="blog-post">
                    <Headers
                        subtitle={post.frontmatter.date}
                        title={post.frontmatter.title}
                    />
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Template;

// export const pageQuery = graphql`
//     query BlogPostByPath($pagePath: String) {
//         markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
//             html
//             excerpt
//             frontmatter {
//                 date(formatString: "MMMM DD, YYYY")
//                 path
//                 title
//                 description
//                 thumbnail {
//                     childImageSharp {
//                         gatsbyImageData
//                         original {
//                             src
//                         }
//                     }
//                 }
//             }
//         }
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//     }
// `;
