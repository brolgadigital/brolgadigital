import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export default function index() {
  return (
    <>
      <Layout>
        <div className='homepage'>
          <StaticImage class='logo' src='../images/bd-text-paleblue-01.png' alt='Brolga Digital' loading='eager'/>
          <div className='slide-container'>
            <Fade {...fadeProperties}>
            
            <div className="each-fade"><StaticImage src='../images/landing/domenico-loia-hGV2TfOh0ns-unsplash.jpeg' alt='' loading='eager'/></div>
            <div className="each-fade"><StaticImage src='../images/landing/rizky-subagja-YgaZnuH2udI-unsplash.jpeg' alt='' loading='eager'/></div>
            <div className="each-fade"><StaticImage src='../images/landing/sigmund-0s43f-8Dz_0-unsplash.jpeg' alt='' loading='eager'/></div>
            <div className="each-fade"><StaticImage src='../images/landing/sigmund-4UGmm3WRUoQ-unsplash.jpeg' alt='' loading='eager'/></div>

            </Fade>
          </div>
        </div>
      </Layout>
    </>
  )
}

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  cssClass: 'home-gallery'
}
