import React from 'react'
import Layout from '../components/Layout'
import Headers from '../components/Headers'
import { Link } from 'gatsby'

export default function packages() {
  return (
    <div>
      <Layout>
      <Headers subtitle='Make it your own with' title='DIY Templates and Instructionals'/>
      <p>Our DIY resources are still being developed. If you want to know when they're ready, sign up to our <Link to='/contact'>mailing list</Link></p>
      </Layout>
    </div>
  )
}
