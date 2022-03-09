import React from "react";
import Head from "../../components/Head";
import Headers from "../../components/Headers";
import { InfoCard, CardWrapper } from "../../components/Cards";
// import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";

const marketing = () => {
  return (
    <>
            <Head title="Advertising and Marketing" />

            <Headers
                subtitle="Put the word out there"
                title="Advertising and Marketing"
                id="seo"
            />

            <div className="uk-clearfix">
                <StaticImage
                    src="../../images/graphics/seo.png"
                    className="uk-align-right uk-width-2-5"
                    alt=''
                />
            </div>

            <CardWrapper>
                <InfoCard
                    title="Paid Broad-Reach Ads"
                    icon="album"
                    desc="Put your brand in front of potential customers and clients. We can set up and manage full advertising campaigns."
                />
                <InfoCard
                    title="Ad Retargeting"
                    icon="refresh"
                    desc="You already have people looking at your content, so why not be more specific with your ad targeting? It seems complicated, but we have the tools to get it done right."
                />
                <InfoCard
                    title="Traditional and Print Advertising"
                    icon="print"
                    desc="Sitemaps are an important piece of website architecture. We can build yours and get it submitted to search engines, so they can index you quickly."
                />
            </CardWrapper>
        </>
  )
}

export default marketing