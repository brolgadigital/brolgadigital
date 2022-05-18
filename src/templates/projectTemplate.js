import React from "react";
import Headers from "../components/Headers";
import Head from "../components/Head";
import { InfoCard, CardWrapper } from "../components/Cards";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { uikitComponents } from "../components/MdxComponents";
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const Template = ({ data }) => {
    const project = data.strapiProject;

    return (
        <>
            <Head title={project.title} />

            <Headers title={project.title} subtitle={project.subtitle}/>

            <CardWrapper>
                {project.overviews.map((card) => {
                    console.log(card)
                    return (<InfoCard icon={card.icon} title={card.title} desc={card.description}/>)
                })}
            </CardWrapper>

            <MDXProvider components={uikitComponents}>
                <MDXRenderer>{project.caseStudy.data.childMdx.body}</MDXRenderer>
            </MDXProvider>

            <Headers
                subtitle="We can help you"
                title="Get Your Project Started"
            />
            <p
                dangerouslySetInnerHTML={{
                    __html: project.summary,
                }}
            ></p>

            <h2>From {project.review.reviewerName}</h2>
            <p className="last">{project.review.reviewBody}</p>
            <OutboundLink
                href={project.website}
                className="button"
                title={project.title}
                aria-label={project.title}
            >
                <span uk-icon="push"></span> View the Live Project
            </OutboundLink>
        </>
    );
};

export default Template;

export const pageQuery = graphql`
    query ProjectByPath($pagePath: String) {
        strapiProject(slug: { eq: $pagePath }) {
            title
            subtitle
            slug
            summary
            caseStudy {
                data {
                    childMdx {
                        body
                    }
                }
            }
            overviews {
                title
                description
            }
            review {
                reviewerName
                reviewBody
            }
        }
    }
`;