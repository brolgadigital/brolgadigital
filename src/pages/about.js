import React from 'react'
import Headers from '../components/Headers'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function about() {
  return (
    <div>
        <Headers title='About Brolga Digital' />
        <StaticImage src='../images/graphics/about.png' className='brand-image' />
        <p>Brolga Digital was founded by Shelley Bassett, who has been managing websites and social media accounts for family, friends and local businesses since 2017. Striking out on her own, she began working with freelance designers, developers and marketers to create the best solutions for her clients.</p>
        <p className='last'>Now, Brolga Digital is a fully fledged agency, ready to take on any digital challenge that might come up. We create products that enable our clients to reach their full potential in the digital space, be it creative, corporate, commercial or just fun! </p>

        <Headers title='Behind the Name' />
        <p className='last'>A Brolga is an elegant water bird, native to most coastal parts of Australia. We chose it as our namesake because it's uniquely Australian, beautiful to look at and designed for its surroundings; just like our websites. </p>


        {/* <Headers subtitle="Who's working for you?" title='Meet Our Team' />
        <h3>Shelley Bassett</h3>
        <h4>Owner, Lead Designer</h4> */}

        <p className='last'>Still have questions? Check out our <Link to='/faqs'>FAQ's</Link></p>
    </div>
  )
}
