import React, {useState, useEffect, useCallback} from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from "./Navigation";


const Mobilemenu = () => {
    return (
        <div className="uk-navbar-container uk-hidden@s bd-mobile-menu" uk-navbar=''>
            
            <div className="uk-navbar-left uk-margin-left">
                <Link to="/" className="bd-mobile-menu-logo">
                    <StaticImage
                        src="../../images/bd-text-paleblue-01.png"
                        alt="Brolga Digital"
                        loading="eager"
                        placeholder="tracedSVG"
                    />
                </Link>
            </div>
            <div className="uk-navbar-right uk-margin-right">
                <a 
                    id="bd-mobile-menu-toggle"
                    href="#bd-nav"
                    uk-toggle=''
                    aria-label="Menu"
                    // uk-icon={'icon: '+ state.icon + '; ratio: 2'}>
                    uk-icon={'icon: menu; ratio: 2'}>
                </a>
            </div>

            <Navigation location='bd-mobile' />
        </div>
    );
}

export default Mobilemenu;
