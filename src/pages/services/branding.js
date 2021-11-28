import React from 'react'
import Layout from '../../components/Layout'
import Headers from '../../components/Headers'
import Cards from '../../components/Cards'

const branding = () => {
    return (
        <Layout>
            <Headers subtitle='Stand out from the crowd' title='Comprehensive Brand Design' id='branding'/>
                <p>Our branding services will provide you with everything to create consistency throughout your business. From a brand guide to business cards, social icons to marketing collateral, we'll present your story cohesively wherever your customers and clients are.</p>

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
            
        </Layout>
    )
}

export default branding
