import React from "react";
import Head from "../components/Head";
import Headers from "../components/Headers";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function about() {
    return (
        <div>
            <Head title="About Us" />

            <Headers title="About Brolga Digital" />

            <div className="uk-clearfix">
                <StaticImage
                    src="../images/graphics/about.png"
                    className="uk-align-right uk-width-2-5"
                    alt=''
                />
                <p>
                    Brolga Digital was founded by Shelley Bassett, who has been
                    managing websites and social media accounts for family, friends
                    and local businesses since 2017. Striking out on her own, she
                    began working with freelance designers, developers and marketers
                    to create the best solutions for her clients.
                </p>
                <p>
                    Now, Brolga Digital is a fully fledged agency, ready to take on
                    any digital challenge that might come up. We create products
                    that enable our clients to reach their full potential in the
                    digital space, be it creative, corporate, commercial or just
                    fun!
                </p>
            </div>

            <Headers title="Behind the Name" />
            <p>
                A Brolga is an elegant water bird, native to most coastal parts
                of Australia. We chose it as our namesake because it's uniquely
                Australian, beautiful to look at and designed for its
                surroundings; just like our websites.{" "}
            </p>

            <p>
                Still have questions? Check out our{" "}
                <Link to="/faqs">FAQ's</Link>
            </p>
        </div>
    );
}
