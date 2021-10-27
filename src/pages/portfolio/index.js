import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Headers from '../../components/Headers'
import ProjectCard from '../../components/ProjectCard'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import * as Icon from 'react-feather'

export default function index({ data }) {
    const projects = data.allMarkdownRemark.nodes

    return (
        <Layout>
            <Headers subtitle="Know what you're getting" title='Our Recent Projects' />

            {projects.map(project => {
                return (
                    <ProjectCard 
                        key={project.id}
                        title={project.frontmatter.title}
                        desc={project.frontmatter.description}
                        
                        // 'An artist based in Queensland, Joanne wanted a new website that reflected her personal style. After a branding refesh, she wanted to continue managing her own online shop and social media.'

                        image={project.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                        case={project.frontmatter.path}
                        website={project.frontmatter.website}
                        // 'https://joannebingham.com'
                    />
                )
            })}
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}
            filter: {frontmatter: { layout: { eq: "portfolio" }}}
        ) {
            nodes {
                id
                excerpt
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    path
                    thumbnail {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    website
                }
            }
        }
    }
`
