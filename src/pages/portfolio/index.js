import React from "react";
import Head from "../../components/Head";
import { graphql } from "gatsby";
import Headers from "../../components/Headers";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { ProjectCard } from "../../components/Cards";

export default function index({ data }) {
    const projects = data.allStrapiProject.nodes;

    if (projects.length === 0) {
        return (
            <p>There's nothing here, sorry</p>
        )
    }

    return (
        <>
            <Head title="Our Work" />

            <Headers
                subtitle="Know what you're getting"
                title="Our Recent Projects"
            />

            <ul className="uk-list">
                <li><OutboundLink
                    href="https://instagram.com/brolgadigital"
                    className="uk-button uk-button-default uk-margin-small-bottom"
                    title="Instagram"
                    aria-label="Instagram"
                >
                    <span className='uk-margin-small-right' uk-icon='icon: instagram; ratio: 1'></span> See More On Instagram
                </OutboundLink></li>
                <li><OutboundLink
                    href="https://dribbble.com/brolgadigital"
                    className="uk-button uk-button-default uk-margin-small-bottom"
                    title="Dribbble"
                    aria-label="Dribbble"
                >
                    <span className='uk-margin-small-right' uk-icon='icon: dribbble; ratio: 1'></span> See More On Dribbble
                </OutboundLink></li>
                <li><OutboundLink
                    href="https://www.behance.net/BrolgaDigital"
                    className="uk-button uk-button-default uk-margin-small-bottom"
                    title="Behance"
                    aria-label="Behance"
                >
                    <span className='uk-margin-small-right' uk-icon='icon: behance; ratio: 1'></span> See More On Behance
                </OutboundLink></li>
            </ul>

            {projects.map((project) => {
                return (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        desc={project.interestDescription}
                        image={
                            project.coverImage.localFile.childImageSharp
                                .gatsbyImageData
                        }
                        case={project.slug}
                        // website={project.frontmatter.website}
                    />
                );
            })}
        </>
    );
}


export const pageQuery = graphql`
    query {
        allStrapiProject {
            nodes {
                id
                title
                interestDescription
                subtitle
                slug
                coverImage {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    }
`;