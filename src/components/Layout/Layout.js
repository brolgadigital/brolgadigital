import React, {useEffect } from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import Webmenu from "./Webmenu";
import Mobilemenu from "./Mobilemenu";
import config from "../../../brolga-config";
import {SplashScreen, SplashScreen2} from "../SplashScreen";

import 'uikit/dist/css/uikit.min.css'
import UIkit from 'uikit';
import uikitIcons from "uikit/dist/js/uikit-icons";

import "../../styles/main.scss"

export default function Layout({ location, children }) {
    useEffect(() => {
        UIkit.use(uikitIcons)
    })

    const path = location.pathname;

    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);
    const {
        site: {
            siteMetadata: { description: siteDescription },
        },
    } = data;

    const frontmatter = {};
    const { description = siteDescription, title = config.siteTitle } =
        frontmatter;

    return (
        <>
        <Mobilemenu />
        <div className="uk-flex uk-flex-row uk-flex-stretch" uk-height-viewport='expand: true'>
            <Helmet
                title={title}
                meta={[{ name: "description", content: description }]}
            >
                <html lang="en" />
                <noscript>
                    This site runs best with JavaScript enabled.
                </noscript>

                {/* <!-- Google Optimize --> */}
                <script src="https://www.googleoptimize.com/optimize.js?id=OPT-P5MZWCD"></script>
                
            </Helmet>

            <div className="uk-visible@s bd-menu">
                <Webmenu />
            </div>

            <div className="uk-width-expand bd-main-content">            
                {path === "/" ? <SplashScreen /> : <></>}
                {path === "/main/" ? <SplashScreen2 /> : <></>}

                <div className="uk-padding uk-container uk-container-small" >
                    {children}
                </div>
            </div>
        </div>
        </>
    );
}
