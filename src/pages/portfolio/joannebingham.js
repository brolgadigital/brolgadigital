import React from 'react'
import Layout from '../../components/Layout'
import Headers from '../../components/Headers'
import Cards from '../../components/Cards'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import * as Icon from 'react-feather'

export default function joannebingham() {
    return (
        <>
        <Layout>
            <Headers subtitle="From the ground up:" title="Joanne Bingham Animal Artist" />

            <div className="cardwrapper">
                <Cards 
                    title='Complete Rebranding'
                    icon='gift'
                    desc="Your business is unique, and your web presence should be too. We don't use cookie cutter templates, everything is custom designed and built with you in mind"
                />
                <Cards 
                    title='Custom Wordpress Theme'
                    icon='gift'
                    desc="Your business is unique, and your web presence should be too. We don't use cookie cutter templates, everything is custom designed and built with you in mind"
                />
                <Cards 
                    title='Ecommerce Integration and Support'
                    icon='gift'
                    desc="Your business is unique, and your web presence should be too. We don't use cookie cutter templates, everything is custom designed and built with you in mind"
                />
                <Cards 
                    title='Ongoing Hosting, Support, and Security'
                    icon='gift'
                    desc="Your business is unique, and your web presence should be too. We don't use cookie cutter templates, everything is custom designed and built with you in mind"
                />
            </div>

            <p>Quick Introduction</p>
            <h2>What we started with</h2>
            <p>When Joanne approached us, she was using a default template from Wordpress, set up and managed by her husband. She wasn't a fan of the dark theme, and wanted something fresh and bright.</p>
            <p>Joanne also had no brand presence. There was no logo or cohesive fonts or colours being used across her marketing. We wanted to create a word-logo that better reprisented her artistic talents.</p>
            <h2>Branding and Web Presence</h2>
            <p>For Joanne, we took a slightly unconventional approach, showing her different combinations of branding options and homepage layouts. Joanne already has design and art experience, and we wanted her to feel creativly invloved in the entire process.</p>
            {/* website images */}
            <p>Our inital focus was on her portfolio, so Joanne could showcase her work at markets and festivals. She also needed her instagram account integrated into the homepage, as this is where she was currently sharing a majority of her illustrations.</p>
            <p>We chose to build her site on Wordpress, and provided one-on-one training so she could add her own blog posts and create custom image galleries. The Wordpress editor is easy to use and provided a clean interface for Joanne to write in.</p>

            <h2>Ongoing Support</h2>
            <p>With no web maanagement experience, Joanne asked that we provide maintenance and hosting for her website. We also included weekly backups, just in case she made an error editing and wanted to roll back.</p>
            <h2>Adding a shop</h2>
            <p>About one year after the intial website rebuild, Joanne requested a custom homepage for her shopfront. She had begun making earrings, and also wanted to sell these in the same online shop.Because we already had strong visual rules for her website, desiging a building a new shopfront was a quick task. We also provided Joanne with some additional training on adding multiple types of products into the same WooCommerce shop.</p>
            {/* Shop design image */}


            <h2>Follow Joanne</h2>
            <OutboundLink href="https://joannebingham.com/" className='button' title="Joanne Bingham Animal Artist" aria-label="Joanne Bingham Animal Artist"><Icon.Instagram /> Joanne's Website</OutboundLink>
            <OutboundLink href="https://www.instagram.com/jo_bingham_animal_artist/" className='button' title="Instagram" aria-label="Instagram"><Icon.Instagram /> Joanne's Instagram</OutboundLink>




        </Layout>   
        </>
    )
}
