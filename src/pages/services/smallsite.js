import React from 'react'
import Head from '../../components/Head'
import Headers from '../../components/Headers'
import Cards from '../../components/Cards'
// import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const smallsite = () => {
    return (
        <>
                        <Head title='Websites' />

            <Headers subtitle='Get started with' title='Blogs and Static Sites' id='smallsite'/>
            <StaticImage src='../../images/graphics/smallsite.png' className='brand-image' />
            <p className='last'>Our designers and developers are well versed in a number of blogging platforms, including Wordpress, Squarespace and Webflow; so no matter your preference, we can build something special. We also have extensive experience with React, and several different frameworks for making lightning fast static sites. In fact, we built the Brolga Digital website using Gatsby for React!</p>

            <div className="cardwrapper">
                <Cards 
                    title='Blogging and Media Sites'
                    icon='gift'
                    desc="Got something to say? We can build you a place to say it. From cheaper templates, to build-from-scratch bespoke sites, we can create a solution to help you manage and share your content."
                />
                <Cards 
                    title='Static and Single Page Sites'
                    icon='layout'
                    desc='Just need something simple to get your business found on Google? Static sites are tiny and blazingly fast, propelling you to the top of the search results.'
                />
                <Cards 
                    title='Admin and User Training'
                    icon='layout'
                    desc="Just because you have a blog doesn't mean you know how to use it. We can provide user training and show you the ins and outs of posting content."
                />
            </div>

        </>
    )
}

export default smallsite
