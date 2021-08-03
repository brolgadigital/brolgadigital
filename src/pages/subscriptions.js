import React from 'react'
import Layout from '../components/Layout'
import Headers from '../components/Headers'
import PriceCard from '../components/PriceCard'
import Button from '../components/Button'
import { Link } from 'gatsby'

export default function subscriptions() {
  return (
    <div>
      <Layout>
      <Headers subtitle='What makes Brolga Digital Different?' title='Ongoing Support Subscriptions' />
      
      <p>It seems like subscription services are everywhere. Streaming, mail boxes, food... We get it. We also know that a lot of these stemmed from the tech industry, where renewing domains and hosting has been standard practice for a long time.</p>
      <p>Ongoing support with Brolga Design is simple. You own everything. We just manage it. From creating backups to scheduling social media posts, we can handle it for you. We aim to take the stress out of online content by consolodating all your online marketing activities and managing them on your behalf.</p>
      <p>Unlike a hosting provider or scheduling service, you don't need to log into anything. <b>Just shoot us an email and we'll get to work for you.</b> And for our premium customers, we'll have a monthly video call to check in with what exactly you need from us.</p>

      
      <p className='last'>We know it’s stressful to choose a web designer, only to have them deliver files and not offer ongoing support. We promise to be different, and support you and our products. It’s like having an in-house media manager, at a fraction of the cost.</p>
      
      <div className="cardwrapper">
        <PriceCard 
          title='Web Basics Plan'
          price='50'
          desc='Perfect for those just getting started, those with minimal updates and those who want to manage social media themselves'
          details={['weekly backups', 'domain and hosting', 'email support', 'uptime monitoring', 'plugin and security updates']}/>
        <PriceCard
          title='Simple Marketing Plan'
          price='120'
          desc='Ideal for growing companies who need a little extra support, but still want to maintain control of their social media accounts'
          details={['web basics plan', 'simple content edits', '2 managed social accounts', 'limited graphic design assistance', '30 scheduled social posts', '30min planning call']}/>
        <PriceCard 
          title='Premium Plan'
          price='250'
          desc="Not a tech person? We've got your back with support, account management, graphic design and content creation"
          details={['web basics plan', 'phone and email support', '6 managed social accounts', 'unlimited graphic design assistance', 'unlimited scheduled social posts', '1hr planning call',]}/>
      </div>

      <p className='last'>Need something a little different? We're flexible, just <Link to='./contact'>contact us</Link></p>

      <Headers subtitle='Need help getting something started?' title='Business Booster Packages' />
      <p>Need help with SEO or ecommerce but not looking for ongoing support? Check out our business boosting packages</p>
      <Button text='Learn More' to='./packages' />

      </Layout>
    </div>
  )
}
