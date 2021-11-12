import React from 'react'
import Layout from '../components/Layout'
import Headers from '../components/Headers'
import Cards from '../components/Cards'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export default function services() {
    return (
        <div>
            <Layout>
                <Headers subtitle='Make it yours with' title='Brolga Digital Services'/>

                <p>Just getting started, needing a complete overhaul or just wanting to start afresh? We're here for whatever your business needs. </p>
                <p className='last'>Each of our projects is custom tailored to our clients needs. We build bespoke digital solutions to help your brand stand out from the online noise. And with our individualised quotes, you'll only ever pay for the services you actually need. No bulk plans filled with bloat to inflate your costs.</p>

                <h2>Find a solution that's right for you</h2>
                <ul>
                    <li><AnchorLink to='/services#branding' title='Branding' /></li>
                    <li><AnchorLink to='/services#support' title='Support and Maintenance' /></li>
                    <li><AnchorLink to='/services#smallsite' title='Micro Sites' /></li>
                    <li><AnchorLink to='/services#ecommerce' title='Ecommerce and Online Sales' /></li>
                    <li><AnchorLink to='/services#strategy' title='Social Media and Marketing Strategies' /></li>
                    <li><AnchorLink to='/services#seo' title='SEO and Optimisation' /></li>
                </ul>

                <h2>Not sure where to start?</h2>
                <p className='last'>If you know you need get started in the digital sphere, but all these terms seem made up, <Link to='/contact'>book a consultation</Link> and see what we can do for you!</p>

                <Headers subtitle='Stand out from the crowd' title='Comprehensive Brand Design' id='branding'/>
                <p>Our branding services will provide you with everything to create consistency throughout your business. From a brand guide to business cards, social icons to marketing collateral, we'll present your story cohesivly wherever your customers and clients are.</p>

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
                </div>

                <Headers subtitle='Find long term solutions' title='Ongoing Support and Maintenance' id='support'/>
                <p className='last'>At Brolga Digital, we promise not to build something complicated and then abandon you when we're done. We offer a range of packages, charged monthly or as used (depending on our agreement). Check out our <Link to='/packages'>packages</Link> for more information on how we can support you long term.</p>


                <Headers subtitle='Get started with' title='Blogs and Static Sites' id='smallsite'/>

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

                <p className='last'>Our designers and developers are well versed in a number of blogging platform, including Wordpress, Squarespace and Webflow, so no matter your preference, we can build something special. We also have extensive experience with React, and several different frameworks for making lightning fast static sites. Infact, we built the Brolga Digital website using Gatsby for React!</p>


                <Headers subtitle='Boost sales with' title='Ecommerce Integration' id='ecommerce'/>
                <p>Did Covid force you to close a phsyical store? Looking to let international customers in on your amazing products? We can help you find the right ecommerce solution that is easy to use, works with your accounting or stocktaking and looks great on your website.</p>

                <div className="cardwrapper">
                    <Cards 
                        title='Inventory and Stock Management'
                        icon='gift'
                        desc="Your business is unique, and your web presence should be too. We don't use cookie cutter templates, everything is custom designed and built with you in mind"
                    />
                    <Cards 
                        title='Shipping Calculation'
                        icon='layout'
                        desc='Our web expertise streches further than just the homepage. Blogs, ecommerce, apps and custom solutions are no problem!'
                    />
                    <Cards 
                        title='Credit Card Processing'
                        icon='layout'
                        desc='Our web expertise streches further than just the homepage. Blogs, ecommerce, apps and custom solutions are no problem!'
                    />
                    <Cards 
                        title='Social Media And Web Shopping'
                        icon='layout'
                        desc='We can also link your online store to platforms like Instagram, Facebook and Google. Get found and sell in more places!'
                    />
                </div>

                <Headers subtitle='Develop a plan' title='Digital and Social Marketing Strategies' id='strategy'/>
                <p>Have lots of product photos but not sure how to share them? Need an add but can't figure out AdWords? Let us spend the time optimising your plan while you run your business.</p>
                <p>Even after you have a plan, we can continue to help you with captions, graphics, animations and a whole variety of other digital creations! Check out the <Link to='../subscriptions'>ongoing subscriptions</Link> for more information.</p>

                <div className="cardwrapper">
                    <Cards 
                        title='Google and Bing Business Pages'
                        icon='gift'
                        desc="A well documented business page will show up on the search engine site and has incredible click through rates. Let us help you make yours stand out!"
                    />
                </div>


                <Headers subtitle='Get found online' title='Search Engine and Performance Optimisation' id='seo'/>
                <div className="cardwrapper">
                    <Cards 
                        title='Google and Bing Business Pages'
                        icon='gift'
                        desc="A well documented business page will show up on the search engine site and has incredible click through rates. Let us help you make yours stand out!"
                    />
                    <Cards 
                        title='Sitemap Submission and Management'
                        icon='layout'
                        desc='Sitemaps are an important piece of website architecture. We can build yours and get it submitted to search engines so they can index you quickly.'
                    />
                    <Cards 
                        title='Website Optimisation'
                        icon='layout'
                        desc='Get loaded fast! Fast websites rank higher, and there are lots of little tricks we have to get you loading quickly in any browser.'
                    />
                    <Cards 
                        title='Content and Keyword Audits'
                        icon='layout'
                        desc='We can go through your website and suggest optomised keywords and edits that will make your website more search engine friendly.'
                    />
                </div>


            </Layout>
        </div>
    )
}
