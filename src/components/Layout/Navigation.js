import React from 'react'
import { Link } from 'gatsby'
import NavFooter from './NavFooter'

const Navigation = ({location}) => {

    let addClass = ''
    let addAtt = ''
    if ( location === 'bd-sidenav') {
        addClass = 'uk-nav-center bd-sidenav'
    }
    if ( location === 'bd-mobile') {
        addClass = 'uk-nav-center uk-nav-primary bd-mobile'
        // addAtt = uk-toggle="target: #bd-nav"
    }
    if (location === 'bd-footer') {
        addClass = 'uk-margin uk-width-1-4 uk-width-1-6@m uk-text-right uk-text-center@m bd-footer'
    }
    
    const MobileOffCanvas = ({ condition, wrap, children }) => (
        condition ? wrap(children) : children
    )

    return (
        <>
        <MobileOffCanvas
            condition = {location === 'bd-mobile'}
            wrap = { children => <div id='bd-nav' uk-offcanvas=''><div className='uk-offcanvas-bar'> {children} <NavFooter /></div></div> }
        >

        <ul className={"uk-nav-default uk-nav " + addClass}>
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
        </MobileOffCanvas>
        </>
    )
}

export default Navigation