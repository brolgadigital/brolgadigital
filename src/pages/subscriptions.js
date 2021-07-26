import React from 'react'
import Layout from '../components/Layout'
import Headers from '../components/Headers'
import PriceCard from '../components/PriceCard'

export default function subscriptions() {
  return (
    <div>
      <Layout>
      <Headers subtitle='Keep everything running smoothly with' title='Ongoing Support Subscriptions' />
      <p className='last'>We know it’s stressful to choose a web designer, only to have them deliver files and not offer ongoing support. We promise to be different, and support you and our products. It’s like having an in-house media manager, at a fraction of the cost.</p>
        <div className="cardwrapper">
            <PriceCard 
              title='Basic Plan'
              price='50'
              desc='Perfect for those just getting started, those with minimal updates and those who want to manage social media themselves'
              details={['weekly backups', 'domain and hosting', 'basic email support',]}/>
            <PriceCard
              title='Executive Plan'
              price='120'
              desc='Ideal for growing companies who need a little extra support each month'
              details={['basic plan +', 'phone and email support', 'social media scheduling', 'social media graphic assistance']}/>
            <PriceCard 
              title='Premium Plan'
              price='250'
              desc="Not a tech person? We've got your back with support, account management, graphic design and content creation"
              details={['basic plan +', 'phone and email support', 'monthly content planning call', 'unlimited social media graphics']}/>
        </div>
        <Headers subtitle='What makes Brolga Digital Different?' title='Why a subscription?' />
        <p>It seems like subscription services are everywhere. Streaming, mail boxes, food... We get it. We also know that a lot of these stemmed from the tech industry, where renewing domains and hosting has been standard practice for a long time.</p>
        <p>Managing your domains, hosting, updates, plugin subscriptions, SEO and sitemap submissions, and social media accounts is a lot of extra work on top of your everyday business activities. Brolga Digital aims to take the stress out of this by consolodating all your online marketing activities to our accounts and managing them on your behalf.</p>
        <p>You own everything. We just manage it. From creating backups to scheduling social media posts, we can handle it for you. And if you ever want to leave us, we'll making transferring really easy.</p>
        <p>Unlike a hosting provider or scheduling service, you don't need to log into anything. Just shoot us an email and we'll get to work for you. And for our premium customers, we'll have a monthly video call to check in with what exactly you need from us.</p>
      </Layout>
    </div>
  )
}
