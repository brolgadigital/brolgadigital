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
        <div>
            <Head title="About Us" />

            <Headers title="About Brolga Digital" />
        </div>
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
