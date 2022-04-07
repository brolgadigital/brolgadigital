import React from 'react'
import Headers from '../components/Headers'
import Head from '../components/Head'
import AuditRequest from '../components/email/AuditRequest'
import { StaticImage } from 'gatsby-plugin-image'

const audit = () => {
  return (
    <>
    <Head title='Online Presence Audit' />

    <Headers subtitle='See how you look online' title='Online Presence Audit' />
    <StaticImage
        src="../images/graphics/seo.png"
        className="uk-align-right uk-width-2-5"
        alt=''
    />
    <p>This isn't an automated service where you put in a URL and bots scan to give you an SEO score. The Brolga Digital Online Presence Audit takes a holistic view of your brand online, finding every mention of your small business, and checking the details of each listing. We look at your website, your social media, Google Maps listings and deep dive into places you might not expect, just to find out how potential customers see your brand.</p>
    <p>Even with a small section dedicated to SEO, we're more focused on the content and how your small business presents itself online. Ensuring that all your contact details and descriptions match and are optimised for your brand.</p>
    <p>After submitting the form, it can take us 2-3 business days to complete the audit. Please be patient, it's conducted by a real person.</p>
    <AuditRequest />
    </>
  )
}

export default audit