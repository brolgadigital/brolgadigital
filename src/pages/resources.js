import React from "react";
import Head from "../components/Head";
import Headers from "../components/Headers";
import { Link, graphql} from "gatsby";


export default function resources({data}) {

    return (
        <>
            <Head title="Downloads and Resources" />

            <Headers
                subtitle="Make it your own with"
                title="DIY Templates and Instructionals"
            />

            <div className="uk-clearfix">
                
            </div>

            {/* <ul>
                {data.allMarkdownRemark.nodes.map((download) => {
                    return (
                        <li><Link to={"/resources/" + download.frontmatter.path}>{download.frontmatter.title}</Link></li>
                    )
                })}
            </ul> */}
        </>
    );
}

// export const query = graphql`
//         query {
//             allMarkdownRemark(filter: {frontmatter: {layout: {eq: "download"}}}) {
//                 nodes {
//                     id
//                     frontmatter {
//                         path
//                         title
//                         layout
//                     }
//                 }
//             }
//         }
//     `