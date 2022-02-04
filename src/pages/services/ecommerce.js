import React from "react";
import Head from "../../components/Head";
import Headers from "../../components/Headers";
import Cards from "../../components/Cards";
// import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";

const ecommerce = () => {
    return (
        <>
            <Head title="E-Commerce" />

            <Headers
                subtitle="Boost sales with"
                title="Ecommerce Integration"
                id="ecommerce"
            />
            <StaticImage
                src="../../images/graphics/ecommerce.png"
                className="brand-image"
            />
            <p>
                Did Covid force you to close a physical store? Looking to let
                international customers in on your amazing products? We can help
                you find the right ecommerce solution that is easy to use, works
                with your accounting or stocktaking and looks great on your
                website.
            </p>

            <div className="cardwrapper">
                <Cards
                    title="Inventory and Stock Management"
                    icon="gift"
                    desc="Bring your own inventory system or let us help you find the best one to suit your needs. Whatever you've got, we'll make it work."
                />
                <Cards
                    title="Shipping Calculation"
                    icon="layout"
                    desc="Calculating shipping and arrival times can be hard. But we know the ins and outs to get your customers accurate information."
                />
                <Cards
                    title="Payment Processing"
                    icon="layout"
                    desc="Not sure how to let customers check out? We can get the whole ecommerce system running smoothly, so you can focus on your products."
                />
                <Cards
                    title="Social Media And Web Shopping"
                    icon="layout"
                    desc="Did you know you need to submit your product catlogue for it to show in search results? We did, and we can automate the process for you. Update a product, it'll update everywhere!"
                />
            </div>
        </>
    );
};

export default ecommerce;
