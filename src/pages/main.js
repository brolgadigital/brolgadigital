import React from "react";
import "react-slideshow-image/dist/styles.css";
import Headers from "../components/Headers";
import { InfoCard, CardWrapper } from "../components/Cards";

export default function main() {
    return (
        <>
            <div id="home">
                <Headers title="Brolga Digital" subtitle="Discover" />
                <p className="last">
                    Brolga Digital are online specialists for small businesses
                    of any type.
                </p>

                <h2>Established Businesses Looking to Grow</h2>
                <CardWrapper>
                    <InfoCard
                        title="Ecommerce and Online Shopping"
                        icon="shopping-bag"
                        desc="Need an online shop or booking system? We can help build one tailored to your business needs."
                        info="/services/ecommerce"
                    />
                    <InfoCard
                        title="Social Media and Marketing Strategies"
                        icon="users"
                        desc="Get help designing marketing plans and campaigns that will boost your business and generate valuable leads."
                        info="/services/strategy"
                    />
                    <InfoCard
                        title="Usability, Speed and Search Engine Optimisations"
                        icon="activity"
                        desc="Organic web traffic is still best lead generator. We can enhance how your website appears in search results."
                        info="/services/seo"
                    />
                </CardWrapper>

                <h2>Artists and Creatives</h2>
                <CardWrapper>
                    <InfoCard
                        title="Micro and Static Sites"
                        icon="layout"
                        desc="Our websites are built to fit your business. Big our small, we can make something perfectly tailored to you."
                        info="/services/smallsite"
                    />
                    <InfoCard
                        title="Ecommerce and Online Shopping"
                        icon="shopping-bag"
                        desc="Need an online shop or booking system? We can help build one tailored to your business needs."
                        info="/services/ecommerce"
                    />
                </CardWrapper>

                <h2>New Businesses and Startups</h2>
                <CardWrapper>
                    <InfoCard
                        title="Branding"
                        icon="gift"
                        desc="From a brand guide to business cards, social icons to marketing collateral, we'll present your story cohesively wherever your customers and clients are."
                        info="/services/branding"
                    />
                    <InfoCard
                        title="Micro and Static Sites"
                        icon="layout"
                        desc="Our websites are built to fit your business. Big our small, we can make something perfectly tailored to you."
                        info="/services/smallsite"
                    />
                </CardWrapper>

                <h2>The Technologically Challenged</h2>
                <CardWrapper>
                    <InfoCard
                        title="Support and Maintenance"
                        icon="life-buoy"
                        desc="Not technically minded? Let us manage the hard parts, and explain things in easy-to-understand language."
                        info="/services/support"
                    />
                </CardWrapper>
            </div>
        </>
    );
}
