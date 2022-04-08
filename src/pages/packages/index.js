import React from "react";
import Head from "../../components/Head";
import Headers from "../../components/Headers";
import { InfoCard, CardWrapper } from "../../components/Cards";


export default function subscriptions() {
    return (
        <>
            <Head title="Packages" />
            <Headers title="Digital Packages" subtitle="Find the Right Solution"/>

            <div className="uk-clearfix">
                <p>
                    Packages with Brolga Digital combine our outstanding services into a cost-effective bundle, helping you save money while still getting our full support. We tailor each package for our clients, ensuring that they’re only paying for services that they need. 
                    <br />
                    Because of our flexible pricing structure, we can scale our monthly subscriptions up or down. Got a busy month where you need more from us? Just ask, and we’ll accommodate your needs. We offer a range of packages, charged in serval different ways with payment plans available.
                </p>
            </div>

            <CardWrapper>
                <InfoCard
                    title="Website Support and Maintenance"
                    icon="life-buoy"
                    desc="Not technically minded? Let us manage the hard parts, and explain things in easy-to-understand language."
                    info="/packages/managed-websites"
                />
                <InfoCard
                    title="Social Media Management"
                    icon="life-buoy"
                    desc="If running social media accounts isn't your jam, loop us in and we'll manage it all for you."
                    info="/packages/social-media-management"
                />
                {/* <InfoCard
                    title="Content and Graphics"
                    icon="life-buoy"
                    desc=""
                    // info="/packages/content-graphics"
                /> */}
                <InfoCard
                    title="Branding"
                    icon="gift"
                    desc="From a brand guide to business cards, social icons to marketing collateral, we'll present your story cohesively wherever your customers and clients are."
                    // info="/packages/branding"
                />
                <InfoCard
                    title="Web Design and Development"
                    icon="gift"
                    desc="Look your best online with a website that showcases who you are and what you do."
                    info="/packages/website-design"
                />
                
            </CardWrapper>
        </>
    );
}
