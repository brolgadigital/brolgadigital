import React from 'react'
import Layout from '../../components/Layout'
import Headers from '../../components/Headers'
import ProjectCard from '../../components/ProjectCard'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import * as Icon from 'react-feather'

export default function index() {
  return (
    <div>
      <Layout>
        <Headers subtitle="Know what you're getting" title='Our Recent Projects' />

        <ProjectCard 
          title='Joanne Bingham'
          desc='An artist based in Queensland, Joanne wanted a new website that reflected her personal style. After a branding refesh, she wanted to continue managing her own online shop and social media.'
          image='Jo Bingham Screen Mockups'
          website='https://joannebingham.com'
        />

        <ProjectCard 
          title='Local Mini Digger'
          desc="Starting a new business is tough. Starting a new business during Covid-19 restrictions is even tougher. We helped this small Melbourne business get started with a website, social media, and lots of training."
          image='LMD Screen Mockups'
          website='https://localminidigger.com.au'
        />

        <div>
          <OutboundLink href="https://instagram.com/brolgadigital" className='button' title="Instagram" aria-label="Instagram"><Icon.Instagram /> See More On Instagram</OutboundLink>
          <OutboundLink href="https://dribbble.com/brolgadigital" className='button' title="Dribbble" aria-label="Dribbble"><Icon.Dribbble /> See More On Dribbble</OutboundLink>
        </div>

      </Layout>
    </div>
  )
}
