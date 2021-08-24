import React from 'react'
import Layout from '../../components/Layout'
import Headers from '../../components/Headers'
import ProjectCard from '../../components/ProjectCard'

export default function index() {
  return (
    <div>
      <Layout>
        <Headers subtitle="Know what you're getting" title='Our Past Projects' />

        <ProjectCard 
          title='Joanne Bingham'
          desc='An artist based in Queensland, Joanne wanted a new website that reflected her personal style. After a branding refesh, she wanted to continue managing her own online shop and social media.'
          image=''
          website='https://joannebingham.com'
        />

        <ProjectCard 
          title='Local Mini Digger'
          desc="Starting a new business is tough. Starting a new business during Covid-19 restrictions is even tougher. We helped this small Melbourne business get started with a website, social media, and lots of training."
          image=''
          website='https://localminidigger.com.au'
        />

      </Layout>
    </div>
  )
}
