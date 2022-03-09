import React from 'react'
import Head from '../../components/Head'
import Headers from '../../components/Headers'
import { PriceCard, CardWrapper } from '../../components/Cards'
import { Link } from 'gatsby'

const webDesign = () => {
  return (
    <>
        <Head title="Website Design Packages" />
        <Headers
                subtitle="Curate your online presence"
                title="Website Design and Development"
        />
        <div className="uk-clearfix">
            <p>
                Not sure where to begin with your website? We have a few simple categories to get you started.
            </p>
        </div>

        <CardWrapper>
            <PriceCard
                title="Static Websites"
                single="true"
                minimum="true"
                price="500"
                desc="Get going online with a simple site that has all your branding and information"
                details={[
                    "Blazingly fast HTML website that gets you started and has excellent SEO potential",
                ]}
            />
            <PriceCard
                title="CMS Setup"
                single="true"
                minimum="true"
                price="1200"
                desc="Got lots of content to manage? We can set you up and teach you the system."
                details={[
                    "A Content Management System (CMS) with dedicated admin area integrated into a website.",
                ]}
            />
            <PriceCard
                title="Custom Solutions"
                single="true"
                minimum="true"
                price="4200"
                desc="Custom, built-from-scratch solutions that designed to fit the specific needs of your business"
                details={[
                    "Add almost any system to your website; including booking, stock management, memberships and much more",
                ]}
            />
        </CardWrapper>
        <p>
            Need something a little different or some help deciding what's right for you? We're flexible, just <Link to="/contact">contact us</Link>.
        </p>
    </>
  )
}

export default webDesign