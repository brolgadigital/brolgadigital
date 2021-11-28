import React from 'react'
import Layout from '../../components/Layout'
import Headers from '../../components/Headers'
import Cards from '../../components/Cards'
// import { Link } from 'gatsby'

const ecommerce = () => {
    return (
        <Layout>
            <Headers subtitle='Boost sales with' title='Ecommerce Integration' id='ecommerce'/>
                <p>Did Covid force you to close a physical store? Looking to let international customers in on your amazing products? We can help you find the right ecommerce solution that is easy to use, works with your accounting or stocktaking and looks great on your website.</p>

                <div className="cardwrapper">
                    <Cards 
                        title='Inventory and Stock Management'
                        icon='gift'
                        desc="Your business is unique, and your web presence should be too. We don't use cookie cutter templates, everything is custom designed and built with you in mind"
                    />
                    <Cards 
                        title='Shipping Calculation'
                        icon='layout'
                        desc='Our web expertise stretches further than just the homepage. Blogs, ecommerce, apps and custom solutions are no problem!'
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
        </Layout>
    )
}

export default ecommerce
