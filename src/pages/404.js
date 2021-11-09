import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Headers from '../components/Headers'

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Headers subtitle='Thats a 404...' title='Page Not Found' />
      <p>
        Sorry, this page doesn't exist. Check the URL or <Link to="/contact">contact us</Link> if you think it should be here.
      </p>
    </Layout>
  )
}

export default NotFoundPage
