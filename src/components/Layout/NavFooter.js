import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { Link } from 'gatsby';

const NavFooter = () => {

    var year = new Date().getFullYear();
    
  return (
    <div className="psudoFooter">
                <p>hello@brolgadigital.com.au</p>
                <ul>
                    <li>
                        <OutboundLink
                            href="https://instagram.com/brolgadigital"
                            title="Instagram"
                            aria-label="Instagram"
                        >
                            <span uk-icon="instagram"></span>
                        </OutboundLink>
                    </li>
                    <li>
                        <OutboundLink
                            href="https://www.facebook.com/brolgadigital"
                            title="Facebook"
                            aria-label="Facebook"
                        >
                            <span uk-icon="facebook"></span>
                        </OutboundLink>
                    </li>
                    <li>
                        <OutboundLink
                            href="https://dribbble.com/brolgadigital"
                            title="Dribbble"
                            aria-label="Dribbble"
                        >
                            <span uk-icon="dribbble"></span>
                        </OutboundLink>
                    </li>
                    <li>
                        <Link to="/faqs" title="FAQ's" aria-label="FAQ's">
                            <span uk-icon="question"></span>
                        </Link>
                    </li>
                </ul>
                <p>&#169; {year}, Brolga Digital</p>
            </div>
  )
}

export default NavFooter