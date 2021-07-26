import React from 'react'
import Layout from '../components/Layout'
import Headers from '../components/Headers'
import MailingList from '../components/email/MailingList'

export default function contact() {
  return (
    <div>
      <Layout>
        <Headers subtitle='Keep up to date with us' title='Mailing List' />
        <MailingList />
      </Layout>
    </div>
  )
}
