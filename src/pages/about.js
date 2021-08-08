import React from 'react'
import Layout from '../components/Layout'
import Headers from '../components/Headers'

export default function about() {
  return (
    <div>
      <Layout>
        <Headers subtitle='Learn more' title='About Brolga Design' />
        <p>Hire a digital manager for a fraction of the price. <b>Just shoot us an email and we'll get to work for you.</b> </p>
        <p className='last'>Each of our projects is custom tailored to our clients needs. We always build bespoke digital solutions to help branding stand out from the online noise.</p>

        <Headers subtitle='Why Brolga?' title='Behind the Name' />
        <p className='last'>A Brolga is an elegant water bird, native to most costal parts of Australia. We chose it as our namesake because of it's uniquly Australian, beautiful to look at and designed for its surroundings; just like our websites. </p>


        {/* <Headers subtitle="Who's working for you?" title='Meet Our Team' />
        <h3>Shelley Bassett</h3>
        <h4>Owner, Lead Designer</h4> */}

      </Layout>
    </div>
  )
}
