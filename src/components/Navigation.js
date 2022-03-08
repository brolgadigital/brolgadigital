import React from 'react'
import { Link } from 'gatsby'

const Navigation = ({location}) => {

    let locationClass = ''
    if ( location === 'bd-sidenav') {
        locationClass = 'uk-nav-center bd-sidenav'
    }
    if (location === 'bd-mobile') {
        locationClass = 'bd-mobile'

    }
    if (location === 'bd-footer') {
        locationClass = 'uk-margin bd-footer'
    }
    

    return (
        <ul className={"uk-nav-default uk-nav " + locationClass}>
            <li>
                <Link to="/services" activeClassName="uk-active" partiallyActive={true}>
                    Services
                </Link>
            </li>
            <li>
                <Link to="/packages" activeClassName="uk-active" partiallyActive={true}>
                    Packages
                </Link>
            </li>
            <li>
                <Link to="/about" activeClassName="uk-active" partiallyActive={true}>
                    About Us
                </Link>
            </li>
            <li>
                <Link to="/portfolio" activeClassName="uk-active" partiallyActive={true}>
                    Portfolio
                </Link>
            </li>
            <li>
                <Link to="/contact" activeClassName="uk-active" partiallyActive={true}>
                    Contact
                </Link>
            </li>
            <li>
                <Link to="/resources" activeClassName="uk-active" partiallyActive={true}>
                    Resources
                </Link>
            </li>
            <li>
                <Link to="/blog" activeClassName="uk-active" partiallyActive={true}>
                    Blog
                </Link>
            </li>
        </ul>
    )
}

export default Navigation