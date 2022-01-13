import React from 'react'
import Headers from '../../components/Headers'
import Cards from '../../components/Cards'
// import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const seo = () => {
    return (
        <>
            <Headers subtitle='Get found online' title='Search Engine and Performance Optimisation' id='seo'/>
            <StaticImage src='../../images/graphics/seo.png' className='brand-image' />

            <div className="cardwrapper">
                <Cards 
                    title='Google and Bing Business Pages'
                    icon='gift'
                    desc="A well documented business page will show up on the search engine site and has incredible click through rates. Let us help you make yours stand out!"
                />
                <Cards 
                    title='Sitemap Submission and Management'
                    icon='layout'
                    desc='Sitemaps are an important piece of website architecture. We can build yours and get it submitted to search engines, so they can index you quickly.'
                />
                <Cards 
                    title='Website Optimisation'
                    icon='layout'
                    desc='Get loaded fast! Fast websites rank higher, and there are lots of little tricks we have to get you loading quickly in any browser.'
                />
                <Cards 
                    title='Content and Keyword Audits'
                    icon='layout'
                    desc='We can go through your website and suggest optimised keywords and edits that will make your website more search engine friendly.'
                />
            </div>
        </>
    )
}

export default seo
