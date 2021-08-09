import React from 'react'
import Layout from '../components/Layout'
import Headers from '../components/Headers'
import Cards from '../components/Cards'

export default function about() {
  return (
    <div>
      <Layout>
        <Headers title='About Brolga Design' />
        <p>Hire a digital manager for a fraction of the price. <b>Just shoot us an email and we'll get to work for you.</b> </p>
        <p className='last'>Each of our projects is custom tailored to our clients needs. We always build bespoke digital solutions to help branding stand out from the online noise.</p>

        <div className="cardwrapper">
          <Cards 
            title='Bespoke Custom Solutions'
            icon='gift'
            desc="Your business is unique, and your web presence should be too. We don't use cookie cutter templatess everything is custom designed and built with you in mind"
          />
          <Cards 
              title='Blogs and Ecommerce'
              icon='layout'
              desc='Our web expertise streches further than just the homepage. Blogs, ecommerce and custom backends are no problem!'
          />
          <Cards 
              title='Cohesive Branding'
              icon='brand'
              desc='Every brand is a story, and we curate yours to be consistent across all platforms and media'
          />
          <Cards 
              title='Attention to Detail'
              icon='search'
              desc='We obsess over every little detail, making sure all our work reaches the high standards of design and copywriting'
          />

        </div>


        <Headers title='Behind the Name' />
        <p className='last'>A Brolga is an elegant water bird, native to most costal parts of Australia. We chose it as our namesake because of it's uniquly Australian, beautiful to look at and designed for its surroundings; just like our websites. </p>


        {/* <Headers subtitle="Who's working for you?" title='Meet Our Team' />
        <h3>Shelley Bassett</h3>
        <h4>Owner, Lead Designer</h4> */}

      </Layout>
    </div>
  )
}
