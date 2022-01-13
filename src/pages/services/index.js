import React from 'react'
import Headers from '../../components/Headers'
import Cards from '../../components/Cards'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// import { AnchorLink } from 'gatsby-plugin-anchor-links'

export default function services() {
    return (
        <div>
                <Headers subtitle='Make it yours with' title='Brolga Digital Services'/>

                <StaticImage src='../../images/graphics/faq.png' className='brand-image' />

                <p>Just getting started, needing a complete overhaul or just wanting to start afresh? We're here for whatever your business needs. </p>
                <p className='last'>Each of our projects is tailored to our clients needs. We design and build bespoke digital solutions to help your brand stand out from the online noise. And with our individualised quotes, you'll only ever pay for the services you actually need. No generic plans that inflate your costs, you only pay for what you need.</p>

                <h2>Find a solution that's right for you</h2>
                <ul>
                    <li><Link to='/services/branding'>Branding</Link></li>
                    <li><Link to='/services/support'>Support and Maintenance</Link></li>
                    <li><Link to='/services/smallsite'>Micro Sites</Link></li>
                    <li><Link to='/services/ecommerce'>Ecommerce and Online Sales</Link></li>
                    <li><Link to='/services/strategy'>Social Media and Marketing Strategies</Link></li>
                    <li><Link to='/services/seo'>SEO and Optimisation</Link></li>
                </ul>

                
                <h2>Our most popular services</h2>

                <div className="cardwrapper">
                    <Cards 
                        title='Bespoke Custom Solutions'
                        icon='gift'
                        desc="Your business is unique, and your web presence should be too. We don't use cookie cutter templates, everything is custom designed and built with you in mind"
                    />
                    <Cards 
                        title='Blogs and Ecommerce'
                        icon='layout'
                        desc='Our web expertise stretches further than just the homepage. Blogs, ecommerce, apps and custom solutions are no problem!'
                    />
                </div>

                <h2>Not sure where to start?</h2>
                <p className='last'>If you know you need get started in the digital sphere, but all these terms seem made up, <Link to='/contact'>book a consultation</Link> and see what we can do for you!</p>
        </div>
    )
}
