import React from "react";
import Head from "../../components/Head";
import Headers from "../../components/Headers";
import { InfoCard, CardWrapper } from "../../components/Cards";
import { StaticImage } from "gatsby-plugin-image";

const branding = () => {
    return (
        <>
            <Head title="Branding" />

            <Headers
                subtitle="Stand out from the crowd"
                title="Comprehensive Brand Design"
                id="branding"
            />
            <StaticImage
                src="../../images/graphics/branding.png"
                className="brand-image"
            />
            <p>
                Our branding services will provide you with everything to create
                consistency throughout your business. From a brand guide to
                business cards, social icons to marketing collateral, we'll
                present your story cohesively wherever your customers and
                clients are.
            </p>

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
        </>
    );
};

export default branding;
