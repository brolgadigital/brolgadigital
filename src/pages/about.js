import React from 'react'
import Layout from '../components/Layout'
import Headers from '../components/Headers'
import Faqs from '../components/FAQ'

export default function about() {
  return (
    <div>
      <Layout>
        <Headers title='About Brolga Design' />
        <p>Brolga Digital was founded by Shelley Bassett, who has been managing websites and social media accounts for family, friends and local businesses since 2017. Striking out on her own, she began working with freelance designers, developers and marketers to create the best solutions for her clients.</p>
        <p className='last'>Now, Brolga Digital is developing into a fully fledged agency, ready to take on any digital challenge that might come up. We aim to create products that enable our clients to reach their full potential in the digital space, be it creative, corporate, commerce or just fun! </p>

        <Headers title='Behind the Name' />
        <p className='last'>A Brolga is an elegant water bird, native to most costal parts of Australia. We chose it as our namesake because of it's uniquly Australian, beautiful to look at and designed for its surroundings; just like our websites. </p>


        {/* <Headers subtitle="Who's working for you?" title='Meet Our Team' />
        <h3>Shelley Bassett</h3>
        <h4>Owner, Lead Designer</h4> */}

      </Layout>
    </div>
  )
}
