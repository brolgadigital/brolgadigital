import React from 'react'
import Layout from '../components/Layout'
import Headers from '../components/Headers'
import Cards from '../components/Cards'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import * as Icon from 'react-feather'
import { Link, graphql } from 'gatsby'

const Template = ({ data }) => {

    const project = data.markdownRemark

    return (
        <>
        <Layout>
            <Headers subtitle={project.frontmatter.subtitle} title={project.frontmatter.title} />

            <div className="cardwrapper">
                <Cards 
                    title='Complete Rebranding'
                    icon='gift'
                    desc="Cohesive fonts and colours to compliment a new wordmark"
                />
                <Cards 
                    title='Custom Wordpress Theme'
                    icon='gift'
                    desc="Build from scratch and designed specifically for Joanne's needs"
                />
                <Cards 
                    title='Ecommerce Integration and Support'
                    icon='gift'
                    desc="Custom shopfront and support adding new products"
                />
                <Cards 
                    title='Ongoing Hosting, Support, and Security'
                    icon='gift'
                    desc="Weekly backups, plugin updates, general security and mainanence at a low monthly cost"
                />
            </div>

            <div dangerouslySetInnerHTML={{ __html: project.html }}></div>

            <Headers subtitle="We can help you" title="Get Your Project Started" />
            <p dangerouslySetInnerHTML={{ __html: project.frontmatter.summary}}></p>

            <h2>From {project.frontmatter.quoteAttribute}</h2>
            <p className='last'>{project.frontmatter.quote}</p>
            <OutboundLink href={project.frontmatter.website} className='button' title={project.frontmatter.name} aria-label={project.frontmatter.name}><Icon.ExternalLink /> View the Live Project</OutboundLink>

        </Layout>   
        </>
    )
}

export default Template

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
            }
        }
    }
`
