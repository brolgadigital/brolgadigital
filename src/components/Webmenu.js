import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from "./Navigation";
import NavFooter from "./NavFooter";

export default function Webmenu() {
    return (
        <>
            <Link to="/">
                <StaticImage
                    src="../images/bd-text-paleblue-01.png"
                    alt="Brolga Digital"
                    loading="eager"
                    placeholder="tracedSVG"
                />
            </Link>
            
            <Navigation location='bd-sidenav' />

            <NavFooter />
        </>
    );
}
