import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
    return (
        <ul className="uk-nav-default uk-nav-center uk-nav">
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