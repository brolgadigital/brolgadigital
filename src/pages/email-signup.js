import React from 'react'
// import MailingList from '../components/email/MailingList'
import SenderEmail from '../components/Layout/SenderEmail'
import Headers from '../components/Headers'
import Head from '../components/Head'

const Email = () => {
  return (
    <>
        <Head title="Sign Up for our Mailing List" />

        <Headers
            subtitle="Stay in the loop"
            title="Sign Up for Monthly Updates"
        />

        <SenderEmail />
    </>
  )
}

export default Email