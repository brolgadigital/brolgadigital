import * as React from "react"
import { Link } from "gatsby"
import Headers from '../components/Headers'
import { StaticImage } from "gatsby-plugin-image"

// markup
const NotFoundPage = () => {
  return (
    <>
      <Headers subtitle='Thats a 404...' title='Page Not Found' />
      <StaticImage src='../images/graphics/404.png' className='brand-image'/>
      <p>
        Sorry, this page doesn't exist. Check the URL or <Link to="/contact">contact us</Link> if you think it should be here.
      </p>
    </>
  )
}

export default NotFoundPage
