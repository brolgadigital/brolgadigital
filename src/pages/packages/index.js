import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import Headers from '../../components/Headers'
import Cards from '../../components/Cards'
import Button from '../../components/Button'
import * as Icon from 'react-feather'

export default function index() {
  return (
    <div>
        <Layout>
            
            <Headers subtitle='Get started with' title='The Complete Design Package'/>
            <div className='cardwrapper'>
                <div className='card'>
                    <p className='last'>Just getting started, needing a complete overhaul or just wanting to start afresh? We're here for whatever your business needs.</p>
                    
                    
                    
                    <Button text='Learn More' class='tinyButton' to='packages/the-works'/>
                </div>
            </div>

            <Headers subtitle='Take it to the next level with' title='Business Booster Packages'/>
            <div className='cardwrapper'>
                <Cards 
                    title='Digital Marketing and Advertising'
                    icon='clipboard'
                    desc='Develop a marketing plan that attracts your customers and feels right for your brand'
                    info='/packages/marketing'
                />
                <Cards
                    title='Branding Refresher'
                    icon='brand'
                    desc='Overhaul your branding and get a fresh new face for your business'
                    info='/packages/branding'
                />
                <Cards
                    message='Save 20%!'
                    title='Website Overhaul'
                    icon='layout'
                    desc="Need an online shop? Membership area? We'll help you upgrade your existing site with new features"
                    info='/packages/webdev'
                />
                <Cards
                    title='SEO and Performance Optimisation'
                    icon='search'
                    desc='Update your website with the latest white-hat SEO to boost your search engine rankings'
                    info='/packages/seo'
                />
            </div>
            <Headers subtitle='Make it your own with' title='DIY Templates and Instructionals'/>
            <p>Want to DIY a marketing refresh? We've got some simple tools to help. </p>
            <Link to='/resources'><Button text='Shop Now' /></Link>
        </Layout>
    </div>
  )
}
