import React from "react";
import Head from "../../components/Head";
import Headers from "../../components/Headers";
import { InfoCard, CardWrapper } from "../../components/Cards";
// import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";

const websites = () => {
    return (
        <>
            <Head title="Websites" />

            <Headers
                subtitle="Get started with"
                title="Blogs and Static Sites"
                id="smallsite"
            />
            <StaticImage
                src="../../images/graphics/smallsite.png"
                className="brand-image"
            />
            <p>
                Our designers and developers are well versed in a number of blogging platforms, including WordPress, Squarespace and Webflow; so no matter your preference, we can build something special. We also have extensive experience with React and several different frameworks for making lightning-fast static sites. In fact, we built the Brolga Digital website using Gatsby for React!
            </p>

            <CardWrapper>
                <InfoCard
                    title="Blogging and Media Sites"
                    icon="album"
                    desc="Got something to say? We can build you a place to say it. From cheaper templates to build-from-scratch bespoke sites, we can create a solution to help you manage and share your content."
                />
                <InfoCard
                    title="Static and Single Page Sites"
                    icon="thumbnails"
                    desc="Just need something simple to get your business found on Google? Static sites are tiny and blazingly fast, propelling you to the top of the search results."
                />
                <InfoCard
                    title="E-commerce and Online Shopping"
                    icon="cart"
                    desc="Did Covid force you to close a physical store? Looking to let international customers in on your amazing products? We can help you find the right e-commerce solution that is easy to use, works with your accounting or stocktaking and looks great on your website."
                />
                <InfoCard
                    title="Inventory and Stock Management"
                    icon="copy"
                    desc="Bring your own inventory system or let us help you find the best one to suit your needs. Whatever you've got, we'll make it work."
                />
                <InfoCard
                    title="Shipping and Payment Processing"
                    icon="credit-card"
                    desc="Not sure how to let customers check out? We can get the whole e-commerce system running smoothly, so you can focus on your products."
                />
            </CardWrapper>
        </>
    );
};

export default websites;
