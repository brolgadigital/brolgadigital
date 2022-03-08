import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from './Navigation'
import SenderEmail from './SenderEmail'

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
        <footer className="uk-flex uk-flex-between uk-flex-wrap bd-footer">
            <address className="uk-width-1-2">
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

            <Navigation location='bd-footer' />

            <SenderEmail />
        </footer>
    );
};

export default Footer;
