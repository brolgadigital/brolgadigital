import React from "react";
import Head from "../../components/Head";
import Headers from "../../components/Headers";
import { InfoCard, CardWrapper } from "../../components/Cards";


export default function subscriptions() {
    return (
            <>
                <Head title="Packages" />
                <Headers title="Digital Packages" subtitle="Know what you're getting"/>

                
                <h2>Find a solution that's right for you</h2>
            <CardWrapper>
                <InfoCard
                    title="Web Design and Development"
                    icon="gift"
                    desc="From a brand guide to business cards, social icons to marketing collateral, we'll present your story cohesively wherever your customers and clients are."
                    info="/packages/website-design"
                />
                <InfoCard
                    title="Website Support and Maintenance"
                    icon="life-buoy"
                    desc="Not technically minded? Let us manage the hard parts, and explain things in easy-to-understand language."
                    info="/packages/managed-websites"
                />
            </CardWrapper>

                
            </>
    );
}
