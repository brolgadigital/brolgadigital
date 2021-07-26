import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import Headers from '../../components/Headers'
import Cards from '../../components/Cards'
import Button from '../../components/Button'

export default function index() {
  return (
    <div>
        <Layout>
            <Headers subtitle='Get started with' title='The Works Design Package'/>
            <div className='cardwrapper'>
                <Cards 
                    title='Branding Refresher'
                    desc='Overhaul your branding and get a fresh new face for your business'
                />
            </div>
            <Headers subtitle='Take it to the next level with' title='Business Booster Packages'/>
            <div className='cardwrapper'>
                <Cards 
                    title='Social Media Marketing and Advertising'
                    desc='Develop a marketing plan that attracts your customers and feels right for your brand'
                />
                <Cards
                    title='Branding Refresher'
                    desc='Overhaul your branding and get a fresh new face for your business'
                />
                <Cards
                    message='Covid Sale!'
                    title='Website Overhaul'
                    desc="Need an online shop? Membership area? We'll help you upgrade your existing site with new features"
                />
                <Cards
                    title='SEO and Performance Optimisation'
                    desc='Update your website with the latest white-hat SEO to boost your search engine rankings'
                />
            </div>
            <Headers subtitle='Make it your own with' title='DIY Templates and Instructionals'/>
            <Link to='/resources'><Button text='Shop Now' /></Link>
        </Layout>
    </div>
  )
}
