import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from "./Navigation";
import NavFooter from "./NavFooter";

export default function Webmenu() {
    return (
        <div className="uk-width-expand uk-flex uk-flex-column uk-padding uk-position-fixed">
            <Link to="/">
                <StaticImage
                    src="../../images/bd-text-paleblue-01.png"
                    alt="Brolga Digital"
                    loading="eager"
                    placeholder="tracedSVG"
                />
            </Link>
            
            <Navigation location='bd-sidenav' />

            <NavFooter />
        </div>
    );
}
