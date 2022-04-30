import React from "react";
import Head from "../../components/Head";
import { graphql } from "gatsby";
import Headers from "../../components/Headers";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { ProjectCard } from "../../components/Cards";

export default function index({ data }) {
    const projects = data.allMarkdownRemark.nodes;

    // return (
    //     <>
    //         <Head title="Our Work" />

    //         <Headers
    //             subtitle="Know what you're getting"
    //             title="Our Recent Projects"
    //         />

    //         <ul className="uk-list">
    //             <li><OutboundLink
    //                 href="https://instagram.com/brolgadigital"
    //                 className="uk-button uk-button-default uk-margin-small-bottom"
    //                 title="Instagram"
    //                 aria-label="Instagram"
    //             >
    //                 <span className='uk-margin-small-right' uk-icon='icon: instagram; ratio: 1'></span> See More On Instagram
    //             </OutboundLink></li>
    //             <li><OutboundLink
    //                 href="https://dribbble.com/brolgadigital"
    //                 className="uk-button uk-button-default uk-margin-small-bottom"
    //                 title="Dribbble"
    //                 aria-label="Dribbble"
    //             >
    //                 <span className='uk-margin-small-right' uk-icon='icon: dribbble; ratio: 1'></span> See More On Dribbble
    //             </OutboundLink></li>
    //             <li><OutboundLink
    //                 href="https://www.behance.net/BrolgaDigital"
    //                 className="uk-button uk-button-default uk-margin-small-bottom"
    //                 title="Behance"
    //                 aria-label="Behance"
    //             >
    //                 <span className='uk-margin-small-right' uk-icon='icon: behance; ratio: 1'></span> See More On Behance
    //             </OutboundLink></li>
    //         </ul>

    //         {projects.map((project) => {
    //             return (
    //                 <ProjectCard
    //                     key={project.id}
    //                     title={project.frontmatter.title}
    //                     desc={project.frontmatter.description}
    //                     image={
    //                         project.frontmatter.thumbnail.childImageSharp
    //                             .gatsbyImageData
    //                     }
    //                     case={project.frontmatter.path}
    //                     website={project.frontmatter.website}
    //                 />
    //             );
    //         })}
    //     </>
    // );

    return <h1>Portfolio Page</h1>
}

// export const pageQuery = graphql`
//     query {
//         allMarkdownRemark(
//             sort: { fields: frontmatter___date, order: DESC }
//             filter: { frontmatter: { layout: { eq: "portfolio" } } }
//         ) {
//             nodes {
//                 id
//                 frontmatter {
//                     date(formatString: "MMMM DD, YYYY")
//                     title
//                     path
//                     description
//                     thumbnail {
//                         childImageSharp {
//                             gatsbyImageData
//                         }
//                     }
//                     website
//                 }
//             }
//         }
//     }
// `;
