import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import SenderEmail from '../components/SenderEmail'

const Footer = () => {
    const copyEmail = () => {
        let range = document.createRange();
        let selection = document.getSelection();
        let copyText = document.getElementById("brolga-email");

        range.selectNode(copyText);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges();

        copyText.classList.toggle('copied')
        setTimeout(function() {
            copyText.classList.toggle('copied')
        }, 1000);
    };

    return (
        <footer>
            <address>
                <StaticImage
                    src="../images/brolga-red-01.png"
                    className="footer-logo"
                    height="50"
                />
                <h3>Brolga Digital</h3>
                <p>Melbourne, Australia</p>
                <button onClick={copyEmail} id="brolga-email">
                    hello@brolgadigital.com.au
                </button>
                <p>03 9191 1063</p>
                <Link to="/contact" activeClassName="currentPage">
                        Book a Consultation
                    </Link>

            </address>

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
                    <Link to="/resources" activeClassName="currentPage">
                        Resources
                    </Link>
                </li>
                <li>
                    <Link to="/blog" activeClassName="currentPage">
                        Blog
                    </Link>
                </li>
            </ul>
            <SenderEmail />
        </footer>
    );
};

export default Footer;
