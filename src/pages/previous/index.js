import React from 'react'
import Layout from '../../components/Layout'
import Headers from '../../components/Headers'
import Cards from '../../components/Cards'
import Faqs from '../../components/FAQ'
import { Link } from 'gatsby'

export default function index() {
    return (
        <div>
            <Layout>
                <Headers subtitle='Get started with' title='The Complete Design Package'/>

                <p>Just getting started, needing a complete overhaul or just wanting to start afresh? We're here for whatever your business needs. </p>
                <p>Each of our projects is custom tailored to our clients needs. We  build bespoke digital solutions to help branding stand out from the online noise.</p>

                <div className="cardwrapper">
                    <Cards 
                        title='Bespoke Custom Solutions'
                        icon='gift'
                        desc="Your business is unique, and your web presence should be too. We don't use cookie cutter templates, everything is custom designed and built with you in mind"
                    />
                    <Cards 
                        title='Blogs and Ecommerce'
                        icon='layout'
                        desc='Our web expertise streches further than just the homepage. Blogs, ecommerce, apps and custom solutions are no problem!'
                    />
                    <Cards 
                        title='Cohesive Branding'
                        icon='brand'
                        desc='Every brand is a story, and we curate yours to be consistent across all platforms and media'
                    />
                    <Cards 
                        title='Attention to Detail'
                        icon='search'
                        desc='We obsess over every little detail, making sure all our work reaches the high standards of design and copywriting'
                    />
                </div>
                <p>Starting from <b>$8000</b>, we create a completely unique solution tailored for your business; telling your story to the people who matter to you. Here's how it works.</p>

                <div className='cardwrapper'>
                    <Cards
                        title='Branding'
                        icon='brand'
                        desc='Start from nothing or an overhaul your existing branding, get a fresh new face for your business'
                    />
                    <Cards
                        title='Website Overhaul'
                        icon='layout'
                        desc="Need an online shop? Membership area? We'll design and build a website that fits perfectly with your business"
                    />
                    <Cards
                        title='SEO and Performance Optimisation'
                        icon='search'
                        desc='Update your website with the latest white-hat Search Engine Optomisation (SEO) to boost your search engine rankings and business presence'
                    />
                    <Cards 
                        title='Digital Marketing and Advertising'
                        icon='clipboard'
                        desc="Develop a digital marketing plan that attracts your customers and feels right for your brand. Be it social media, email lists or shop conversions, we've got you covered"
                    />
                </div>

                <p className='last'>We also promise not to build a something complicated and then abandon you when it gets hard. Check out our <Link to='../subscriptions'>ongoing subscriptions</Link> for more information on how we can support you long term.</p>

                <Faqs />

            </Layout>
        </div>
    )
}
