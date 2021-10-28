import React from 'react'
import Layout from '../components/Layout'
import Headers from '../components/Headers'
import Cards from '../components/Cards'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import * as Icon from 'react-feather'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'

const Template = ({ data }) => {

    const project = data.markdownRemark

    return (
        <>
        <Layout>
            <Headers subtitle={project.frontmatter.subtitle} title={project.frontmatter.title} />
            {/* <Headers subtitle="From the ground up:" title="Joanne Bingham Animal Artist" /> */}

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

            <div
                // className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: project.html }}
            ></div>

            <Headers subtitle="We can help you" title="Get Your Project Started" />
            <p>Joanne started with a website that wasn't working for her, and no brand presence or cohesion. If you're in a similar spot, we can help! Read more about our <Link to='../../packages'>design packages</Link> or book a free consultation today.</p>

            <h2>From Joanne</h2>
            <p className='last'>Shelley from Brolga Digital designed and built a beautiful, easy to navigate website to showcase and sell my work.  She listened, and incorporated or improved my ideas and suggestions and I am delighted with the results, and the ongoing help and support.</p>
            <OutboundLink href="https://joannebingham.com/" className='button' title="Joanne Bingham Animal Artist" aria-label="Joanne Bingham Animal Artist"><Icon.Instagram /> Joanne's Website</OutboundLink>
            <OutboundLink href="https://www.instagram.com/jo_bingham_animal_artist/" className='button' title="Instagram" aria-label="Instagram"><Icon.Instagram /> Joanne's Instagram</OutboundLink>

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
            }
        }
    }
`
