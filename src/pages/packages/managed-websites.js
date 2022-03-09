import React from 'react'
import Head from '../../components/Head'
import Headers from '../../components/Headers'
import { PriceCard, CardWrapper } from '../../components/Cards'
import { Link } from 'gatsby'

const managedWebsites = () => {
  return (
    <>
    <Head title="Managed Website Packages" />
        <Headers
                    subtitle="What makes Brolga Digital different?"
                    title="Ongoing Support Packages"
                />

                <p>
                    Not everyone wants to learn the technical side of their website. At Brolga Digital we support you in learning the parts you're interested in, and then manage the parts you're not. The choice is yours.
                </p>

                <CardWrapper>
                    <PriceCard
                        title="Base Plan"
                        price="30"
                        desc="Perfect for those with a give-it-a-go mentality"
                        details={[
                            'Hosting',
                            'Domain',
                            'Weekly Backups',
                            'Security Updates',
                        ]}
                    />
                    <PriceCard
                        title="Everyday Plan"
                        price="50"
                        desc="Manage your content while we look after the tech"
                        details={[
                            'Base +',
                            'Troubleshooting and Support',
                            'Uptime Monitoring',
                            'Analytics Access',
                        ]}
                    />
                    <PriceCard
                        title="Comprehensive Management"
                        price="75"
                        desc="Let us do the hard work and manage your site"
                        details={[
                            'Everyday +',
                            'Priority Support',
                            'Content and Plugin Updates',
                            'Improvement Suggestions',
                        ]}
                    />
                </CardWrapper>

                <p>
                    Need something a little different or some help deciding what's right for you? We're flexible, just <Link to="/contact">contact us</Link>.
                </p>
    </>
  )
}

export default managedWebsites