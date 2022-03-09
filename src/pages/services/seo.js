import React from "react";
import Head from "../../components/Head";
import Headers from "../../components/Headers";
import { InfoCard, CardWrapper } from "../../components/Cards";
// import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";

const seo = () => {
    return (
        <>
            <Head title="SEO" />

            <Headers
                subtitle="Get found online"
                title="Search Engine and Performance Optimisation"
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
                    title="Analytics and User Optimisation"
                    icon="users"
                    desc="We’re data-driven and use analytics to get the best performance out of your website, making sure your visitors convert!"
                />
                <InfoCard
                    title="Google and Bing Business Pages"
                    icon="google"
                    desc="A well-documented business page will show up on the search engine site and has incredible click through rates. Let us help you make yours stand out!"
                />
                <InfoCard
                    title="Sitemap Submission and Management"
                    icon="social"
                    desc="Sitemaps are an important piece of website architecture. We can build yours and get it submitted to search engines, so they can index you quickly."
                />
                <InfoCard
                    title="Website Optimisation"
                    icon="bolt"
                    desc="Get loaded fast! Fast websites rank higher, and there are lots of little tricks we have to get you loading quickly in any browser."
                />
                <InfoCard
                    title="Content and Keyword Audits"
                    icon="file-text"
                    desc="We can go through your website and suggest optimised keywords and edits that will make your website more search engine friendly."
                />
            </CardWrapper>
        </>
    );
};

export default seo;
