import React from 'react'
import Head from '../../components/Head'
import Headers from '../../components/Headers'
import PriceCard from '../../components/PriceCard'
import { Link } from 'gatsby'

const managedWebsites = () => {
  return (
    <>
    <Head title="Managed Website Packages" />
        <Headers
                    subtitle="What makes Brolga Digital different?"
                    title="Ongoing Support Packages"
                />

                <p className="last">
                    Not everyone wants to learn the technical side of their website. At Brolga Digital we support you in learning the parts you're interested in, and then manage the parts you're not. The choice is yours.
                </p>

                <div className="cardwrapper">
                    <PriceCard
                        title="Website Support Package"
                        price="30"
                        desc="Perfect for those with a give-it-a-go mentality"
                        details={[
                            "Single Domain Registration",
                            "Website Hosting",
                            "Plugin and Security Updates",
                            "Monthly Backups",
                        ]}
                    />
                    <PriceCard
                        title="Small Business Starter Package"
                        price="50"
                        desc="Manage your content while we look after the tech"
                        details={[
                            "Multiple Domain Registration",
                            "Website Hosting",
                            "Plugin and Security Updates",
                            "Weekly Backups",
                            "Basic SEO",
                            "Troubleshooting and Debugging Support",
                            "Uptime Monitoring",
                            "Analytics Access"
                        ]}
                    />
                    <PriceCard
                        title="Comprehensive Management"
                        price="75"
                        desc="Let us do the hard work and manage your site"
                        details={[
                            "Multiple Domain Registration",
                            "Website Hosting",
                            "Plugin and Security Updates",
                            "Weekly Backups",
                            "Advanced SEO",
                            "Troubleshooting and Debugging",
                            "Uptime Monitoring",
                            "Analytics Access",
                            "Priority Support",
                            "Content Management and Updating"
                        ]}
                    />
                </div>

                <p className="last">
                    Need something a little different or some help deciding what's right for you? We're flexible, just <Link to="/contact">contact us</Link>.
                </p>
    </>
  )
}

export default managedWebsites