import React from "react";
import Head from "../../components/Head";
import Headers from "../../components/Headers";
import Cards from "../../components/Cards";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const strategy = () => {
    return (
        <>
            <Head title="Marketing Strategies" />

            <Headers
                subtitle="Develop a plan"
                title="Digital and Social Marketing Strategies"
                id="strategy"
            />
            <StaticImage
                src="../../images/graphics/strategy.png"
                className="brand-image"
            />
            <p>
                Have lots of product photos but not sure how to share them? Need
                an ad but can't figure out AdWords? Let us spend the time
                optimising your plan while you run your business.
            </p>
            <p>
                Even after you have a plan, we can continue to help you with
                captions, graphics, animations and a whole variety of other
                digital creations! Check out the{" "}
                <Link to="../subscriptions">ongoing subscriptions</Link> for
                more information.
            </p>

            <div className="cardwrapper">
                <Cards
                    title="Google and Bing Business Pages"
                    icon="gift"
                    desc="A well documented business page will show up on the search engine site and has incredible click through rates. Let us help you make yours stand out!"
                />
            </div>
        </>
    );
};

export default strategy;
