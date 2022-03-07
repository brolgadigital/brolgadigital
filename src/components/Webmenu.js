import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { StaticImage } from "gatsby-plugin-image";
import * as Icon from "react-feather";

export default function Webmenu() {
    var year = new Date().getFullYear();
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
            <ul className="navigation">
                <li>
                    <Link to="/services" activeClassName="currentPage" partiallyActive={true}>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="/packages" activeClassName="currentPage" partiallyActive={true}>
                        Packages
                    </Link>
                </li>
                <li>
                    <Link to="/about" activeClassName="currentPage" partiallyActive={true}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" activeClassName="currentPage" partiallyActive={true}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/contact" activeClassName="currentPage" partiallyActive={true}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/resources" activeClassName="currentPage" partiallyActive={true}>
                        Resources
                    </Link>
                </li>
                <li>
                    <Link to="/blog" activeClassName="currentPage" partiallyActive={true}>
                        Blog
                    </Link>
                </li>
            </ul>

            <div className="psudoFooter">
                <p>hello@brolgadigital.com.au</p>
                <ul>
                    <li>
                        <OutboundLink
                            href="https://instagram.com/brolgadigital"
                            title="Instagram"
                            aria-label="Instagram"
                        >
                            <Icon.Instagram />
                        </OutboundLink>
                    </li>
                    <li>
                        <OutboundLink
                            href="https://www.facebook.com/brolgadigital"
                            title="Facebook"
                            aria-label="Facebook"
                        >
                            <Icon.Facebook />
                        </OutboundLink>
                    </li>
                    <li>
                        <OutboundLink
                            href="https://dribbble.com/brolgadigital"
                            title="Dribbble"
                            aria-label="Dribbble"
                        >
                            <Icon.Dribbble />
                        </OutboundLink>
                    </li>
                    <li>
                        <Link to="/faqs" title="FAQ's" aria-label="FAQ's">
                            <Icon.HelpCircle />
                        </Link>
                    </li>
                </ul>
                <p>&#169; {year}, Brolga Digital</p>
            </div>
        </>
    );
}
