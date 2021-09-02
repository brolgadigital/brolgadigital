import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { StaticImage } from 'gatsby-plugin-image'
import * as Icon from 'react-feather'
import '../styles/style.scss'

export default function Webmenu() {
    return (
        <>
            <Link to='/'><StaticImage src='../images/bd-text-paleblue-01.png' alt='Brolga Digital' loading='eager'/></Link>
            <ul className="navigation">
                <li><Link to='/packages' activeClassName="currentPage">Packages</Link></li>
                <li><Link to='/subscriptions' activeClassName="currentPage">Subscriptions</Link></li>
                <li><Link to='/about' activeClassName="currentPage">About Us</Link></li>
                <li><Link to='/portfolio' activeClassName="currentPage">Portfolio</Link></li>
                <li><Link to='/resources' activeClassName="currentPage">Resources</Link></li>
                <li><Link to='/contact' activeClassName="currentPage">Contact</Link></li>
            </ul>

            <div className="psudoFooter">
                <p>hello@brolgadigital.com.au</p>
                <ul>
                    <li><OutboundLink href="https://instagram.com/brolgadigital" title="Instagram" aria-label="Instagram"><Icon.Instagram /></OutboundLink></li>
                    <li><OutboundLink href="https://www.facebook.com/brolgadigital" title="Facebook" aria-label="Facebook"><Icon.Facebook /></OutboundLink></li>
                    <li><OutboundLink href="https://dribbble.com/brolgadigital" title="Dribbble" aria-label="Dribbble"><Icon.Dribbble /></OutboundLink></li>
                    <li><Link to='/faqs' title="FAQ's" aria-label="FAQ's"><Icon.HelpCircle /></Link></li>
                </ul>
            </div>
        </>
    )
}
