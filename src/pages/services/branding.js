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

            <div className="uk-clearfix">
                <StaticImage
                    src="../../images/graphics/branding.png"
                    className="uk-align-right uk-width-2-5"
                    alt=''
                />
                <p>
                    Our branding services will provide you with everything to create consistency throughout your business. From a brand guide to business cards, social icons to marketing collateral, we'll present your story cohesively wherever your customers and clients are.
                </p>
            </div>

            <CardWrapper>
                <InfoCard
                    title="Logo Design"
                    icon="image"
                    desc="Often the core of your brand identity, we’ll create a beautiful, eye-catching vector logo that will look good in any size as well as black and white for any printing."
                />
                <InfoCard
                    title="Brand Identity"
                    icon="album"
                    desc="Your brand is more than your logo. Our branding encompasses the entire visual identity, including colour and typography presentation."
                />
                <InfoCard
                    title="Document Templating"
                    icon="file-edit"
                    desc="Do you need help placing your brand on an invoice? A digital download? Social media posts? We can make templates that will make your life easier."
                />
                <InfoCard
                    title="Print Collateral"
                    icon="print"
                    desc="Business cards, marketing materials, flyers, catalogues, menus… Your brand is presented in a lot of different ways on and offline. "
                />
            </CardWrapper>
        </>
    );
};

export default branding;
