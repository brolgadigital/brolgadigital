import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Button from '../components/Button'

export default function index() {
  return (
    <>
        <div className='homepage'>
          <div className='titles'>
            <StaticImage class='logo' src='../images/bd-text-paleblue-01.png' alt='Brolga Digital' loading='eager' placeholder='tracedSVG'/>
            <div className='headliner'>
                <h2>The Digital Agency for Small Bussiness</h2>
                <p>It starts with just a simple conversation</p>
                <Button text='Book Now' to='/contact/'/>
            </div>
          </div>
          <div className='slide-container'>
            <Fade {...fadeProperties}>
            
            <div className="each-fade"><StaticImage src='../images/landing/domenico-loia-hGV2TfOh0ns-unsplash.jpeg' alt='' loading='eager'/></div>
            <div className="each-fade"><StaticImage src='../images/landing/rizky-subagja-YgaZnuH2udI-unsplash.jpeg' alt='' loading='eager'/></div>
            <div className="each-fade"><StaticImage src='../images/landing/sigmund-0s43f-8Dz_0-unsplash.jpeg' alt='' loading='eager'/></div>
            <div className="each-fade"><StaticImage src='../images/landing/sigmund-4UGmm3WRUoQ-unsplash.jpeg' alt='' loading='eager'/></div>

            </Fade>
          </div>
        </div>
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
