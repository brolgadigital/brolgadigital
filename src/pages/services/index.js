import React from "react";
import Head from "../../components/Head";
import Headers from "../../components/Headers";
import { InfoCard, CardWrapper } from "../../components/Cards";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function services() {
    return (
        <>
            <Head title="Services" />
            <Headers
                subtitle="Make it yours with"
                title="Brolga Digital Services"
            />

            <div className="uk-clearfix">
                <StaticImage
                    src="../../images/graphics/faq.png"
                    className="uk-align-right uk-width-2-5"
                    alt=''
                />
                
                <p>
                    Just getting started, needing a complete overhaul or just wanting to start afresh? We're here for whatever your business needs.
                    <br />
                    Each of our projects is tailored to our client's needs. We design and build bespoke digital solutions to help your brand stand out from the online noise. And with our individualised quotes, you'll only ever pay for the services you actually need. No generic plans that inflate your costs, you only pay for what you need.

                </p>
            </div>
            
            <h2>Find a solution that's right for you</h2>
            <CardWrapper>
                <InfoCard
                    title="Education and Training"
                    icon="file-edit"
                    desc="We run training sessions on all our services. Keep an eye on our social media for open sessions, or book a private session for either a group or individual."
                />
                <InfoCard
                    title="Branding"
                    icon="star"
                    desc="From a brand guide to business cards, social icons to marketing collateral, we'll present your story cohesively wherever your customers and clients are."
                    info="/services/branding"
                />
                <InfoCard
                    title="Support and Maintenance"
                    icon="lifesaver"
                    desc="Not technically minded? Let us manage the hard parts, and explain things in easy-to-understand language."
                    info="/services/support"
                />
                <InfoCard
                    title="Website Design and Development"
                    icon="thumbnails"
                    desc="Our websites are built to fit your business. Big our small, we can make something perfectly tailored to you."
                    info="/services/websites"
                />
                <InfoCard
                    title="Usability, Speed and Search Engine Optimisations"
                    icon="search"
                    desc="Organic web traffic is still best lead generator. We can enhance how your website appears in search results."
                    info="/services/seo"
                />
                <InfoCard
                    title="Content Management"
                    icon="image"
                    desc="We can write and design your content to be presented across all your marketing channels."
                    info="/services/content"
                />
                <InfoCard
                    title="Advertising and Marketing"
                    icon="comments"
                    desc="Get help designing marketing plans and campaigns that will boost your business and generate valuable leads."
                    info="/services/marketing"
                />
            </CardWrapper>

            <h2>Our most popular services</h2>

            <CardWrapper>
                <InfoCard
                    title="Bespoke Custom Solutions"
                    icon="gift"
                    desc="Your business is unique, and your web presence should be too. We don't use cookie cutter templates, everything is custom designed and built with you in mind"
                />
                <InfoCard
                    title="Blogs and Ecommerce"
                    icon="layout"
                    desc="Our web expertise stretches further than just the homepage. Blogs, ecommerce, apps and custom solutions are no problem!"
                />
            </CardWrapper>

            <h2>Not sure where to start?</h2>
            <p>
                If you know you need get started in the digital sphere, but all
                these terms seem made up,{" "}
                <Link to="/contact">book a consultation</Link> and see what we
                can do for you!
            </p>
        </>
    );
}
