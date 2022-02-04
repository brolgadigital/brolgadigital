import React from "react";
import Headers from "../components/Headers";
import Cards from "../components/Cards";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import * as Icon from "react-feather";
import { Link, graphql } from "gatsby";

const Template = ({ data }) => {
    const project = data.markdownRemark;

    return (
        <>
            <Headers
                subtitle={project.frontmatter.subtitle}
                title={project.frontmatter.title}
            />

            <div className="cardwrapper">
                <Cards cardData={project.frontmatter.infobox1} />
                <Cards cardData={project.frontmatter.infobox2} />
                <Cards cardData={project.frontmatter.infobox3} />
                <Cards cardData={project.frontmatter.infobox4} />
            </div>

            <div dangerouslySetInnerHTML={{ __html: project.html }}></div>

            <Headers
                subtitle="We can help you"
                title="Get Your Project Started"
            />
            <p
                dangerouslySetInnerHTML={{
                    __html: project.frontmatter.summary,
                }}
            ></p>

            <h2>From {project.frontmatter.quoteAttribute}</h2>
            <p className="last">{project.frontmatter.quote}</p>
            <OutboundLink
                href={project.frontmatter.website}
                className="button"
                title={project.frontmatter.name}
                aria-label={project.frontmatter.name}
            >
                <Icon.ExternalLink /> View the Live Project
            </OutboundLink>
        </>
    );
};

export default Template;

export const pageQuery = graphql`
    query ProjectsByPath($pagePath: String) {
        markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                subtitle
                website
                quoteAttribute
                quote
                summary
                infobox1 {
                    display
                    icon
                    boxtitle
                    blurb
                }
                infobox2 {
                    display
                    icon
                    boxtitle
                    blurb
                }
                infobox3 {
                    display
                    icon
                    boxtitle
                    blurb
                }
                infobox4 {
                    display
                    icon
                    boxtitle
                    blurb
                }
            }
        }
    }
`;
