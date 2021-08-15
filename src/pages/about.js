import React from 'react'
import Layout from '../components/Layout'
import Headers from '../components/Headers'
import Faqs from '../components/FAQ'

export default function about() {
  return (
    <div>
      <Layout>
        <Headers title='About Brolga Design' />
        



        <Headers title='Behind the Name' />
        <p className='last'>A Brolga is an elegant water bird, native to most costal parts of Australia. We chose it as our namesake because of it's uniquly Australian, beautiful to look at and designed for its surroundings; just like our websites. </p>


        {/* <Headers subtitle="Who's working for you?" title='Meet Our Team' />
        <h3>Shelley Bassett</h3>
        <h4>Owner, Lead Designer</h4> */}

      </Layout>
    </div>
  )
}
