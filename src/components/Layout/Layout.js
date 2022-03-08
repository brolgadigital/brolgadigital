import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import Webmenu from "./Webmenu";
import Mobilemenu from "./Mobilemenu";
import config from "../../../brolga-config";
import {SplashScreen, SplashScreen2} from "../SplashScreen";

import "../../styles/style.scss";
import "../../styles/main.scss"

export default function Layout({ location, children }) {
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
        <div className="uk-flex uk-flex-row uk-flex-stretch">
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
                
                {/* <!-- UIkit JS --> */}
                <script src="https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/js/uikit.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/js/uikit-icons.min.js"></script>
            </Helmet>

            <div className="bd-menu">
                <Webmenu />
            </div>

            <Mobilemenu />
            {path === "/" ? <SplashScreen /> : <></>}
            {path === "/main/" ? <SplashScreen2 /> : <></>}

            <div className="uk-padding uk-width-expand">{children}</div>
        </div>
    );
}
