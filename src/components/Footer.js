import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
    return (
        <footer>
            <div>
                <StaticImage
                    src="../images/brolga-red-01.png"
                    className="footer-logo"
                    height="50"
                />

                <ul>
                    <li>
                        <h3>Brolga Digital</h3>
                    </li>
                    <li>Melbourne, Australia</li>
                    <li>hello@brolgadigital.com.au</li>
                    <li>
                        <Link to="/contact" activeClassName="currentPage">
                            Book a Consultation
                        </Link>
                    </li>
                </ul>
            </div>

            <ul>
                <li>
                    <Link to="/services" activeClassName="currentPage">
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="/packages" activeClassName="currentPage">
                        Packages
                    </Link>
                </li>
                <li>
                    <Link to="/about" activeClassName="currentPage">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" activeClassName="currentPage">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/contact" activeClassName="currentPage">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/blog" activeClassName="currentPage">
                        Blog
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
