import React from "react";
import { graphql } from "gatsby";
// import SeoWithQuery from '../components/seo/seo'
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Headers from "../components/Headers";

const Template = ({ data }) => {
    const post = data.markdownRemark;
    const page = data.site.siteMetadata;

    const pageTitle = post.frontmatter.title + " || " + page.title;

    return (
        <>
            <Helmet
                title={pageTitle}
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
                    <a href={post.frontmatter.download.publicURL} download={post.frontmatter.title} className="button">Download</a>
                </div>
            </div>
        </>
    );
};

export default Template;

export const pageQuery = graphql`
    query DownloadByPath($pagePath: String) {
        markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
            html
            excerpt
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                description
                download {
                    publicURL
                    size
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;
