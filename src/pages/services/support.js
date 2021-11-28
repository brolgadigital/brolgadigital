import React from 'react'
import Layout from '../../components/Layout'
import Headers from '../../components/Headers'
// import Cards from '../../components/Cards'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const support = () => {
    return (
        <Layout>
            <Headers subtitle='Find long term solutions' title='Ongoing Support and Maintenance' id='support'/>
            <StaticImage src='../../images/graphics/branding.png' className='brand-image' />
            <p className='last'>At Brolga Digital, we promise not to build something complicated and then abandon you when we're done. We offer a range of packages, charged monthly or as used (depending on our agreement). Check out our <Link to='/packages'>packages</Link> for more information on how we can support you long term.</p>
        </Layout>
    )
}

export default support
