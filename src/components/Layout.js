import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import Webmenu from "../components/Webmenu";
import Mobilemenu from "../components/Mobilemenu";
import config from "../../brolga-config";
import {SplashScreen, SplashScreen2} from "./SplashScreen";

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
        <div className="layout">
            <Helmet
                title={title}
                meta={[{ name: "description", content: description }]}
            >
                <html lang="en" />
                <noscript>
                    This site runs best with JavaScript enabled.
                </noscript>
                <script src="https://www.googleoptimize.com/optimize.js?id=OPT-P5MZWCD"></script>
            </Helmet>

            <div className="sidemenu">
                <Webmenu />
            </div>

            <Mobilemenu />
            {path === "/" ? <SplashScreen /> : <></>}
            {path === "/main" ? <SplashScreen2 /> : <></>}

            <div className="content">{children}</div>
        </div>
    );
}
