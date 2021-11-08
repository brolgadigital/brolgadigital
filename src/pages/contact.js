import React from 'react'
import Layout from '../components/Layout'
import Headers from '../components/Headers'
import MailingList from '../components/email/MailingList'

export default function contact() {
  const copyEmail = () => {
    let range = document.createRange()
    let selection = document.getSelection()

    let copyText = document.getElementById('brolga-email')

    range.selectNode(copyText)
    selection.removeAllRanges()
    selection.addRange(range)
    document.execCommand('copy')
    selection.removeAllRanges()
  }

  return (
    <div>
      <Layout>
        <Headers subtitle='Reach out and say hello' title='Contact Us' />
        <p className='last'>For more information about our business packages or ongoing support subscriptions, email <button onClick={copyEmail} id='brolga-email'>hello@brolgadigital.com.au</button> or book a free consult</p>

        {/* <Headers subtitle='Keep up to date with us' title='Mailing List' />
        <MailingList /> */}

        <Headers subtitle='Find out what we can do for you' title='Book a Consultation' />
        <div className='cal'>
            <iframe src="http://cal.brolgadigital.com.au/brolgadigital/consult" frameborder="0" allowfullscreen></iframe>
        </div>

      </Layout>
    </div>
  )
}
