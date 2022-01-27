import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { StaticImage } from 'gatsby-plugin-image'
import * as Icon from 'react-feather'
import '../styles/style.scss'

class Mobilemenu extends React.Component{

    constructor(props) {
        super(props)
        this.state = {   
            burger: 'inline',
            cross: 'none',
            menu: '60px',
            items: 'none',
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }
      
    open(e){
        this.setState({ 
            burger: 'none',
            cross: 'inline',
            menu: '100vh',
            items: 'block',
        })
    }
    close(e) {
        this.setState({
            burger: 'inline',
            cross: 'none',
            menu: '60px',
            items: 'none',
        })
    }

    render() {

    return (
        <div className='topmenu' style={{height: this.state.menu}} >
            <div>
                <Link to='/' className='homebutton'><StaticImage src='../images/bd-text-paleblue-01.png' alt='Brolga Digital' loading='eager' placeholder='tracedSVG'/></Link>
                <div className='drawer'>
                    <button id='menu' onClick={this.open} aria-label='Open Menu' style={{display: this.state.burger}}><Icon.Menu /></button>
                    <button id='close' onClick={this.close} aria-label='Close Menu' style={{display: this.state.cross}}><Icon.X /></button>
                </div>
            </div>
           
            <ul className="navigation" style={{display: this.state.items}}>
                <li><Link to='/services' activeClassName="currentPage" onClick={this.close}>Services</Link></li>
                <li><Link to='/packages' activeClassName="currentPage" onClick={this.close}>Packages</Link></li>
                <li><Link to='/about' activeClassName="currentPage" onClick={this.close}>About Us</Link></li>
                <li><Link to='/portfolio' activeClassName="currentPage" onClick={this.close}>Portfolio</Link></li>
                <li><Link to='/contact' activeClassName="currentPage" onClick={this.close}>Contact</Link></li>
                <li><Link to='/blog' activeClassName="currentPage" onClick={this.close}>Blog</Link></li>
            </ul>

            <div className="psudoFooter" style={{display: this.state.items}}>
                <p>hello@brolgadigital.com.au</p>
                <ul>
                    <li><OutboundLink href="https://instagram.com/brolgadigital" title="Instagram" aria-label="Instagram"><Icon.Instagram /></OutboundLink></li>
                    <li><OutboundLink href="https://www.facebook.com/brolgadigital" title="Facebook" aria-label="Facebook"><Icon.Facebook /></OutboundLink></li>
                    <li><OutboundLink href="https://dribbble.com/brolgadigital" title="Dribbble" aria-label="Dribbble"><Icon.Dribbble /></OutboundLink></li>
                    <li><Link to='/faqs' title="FAQ's" aria-label="FAQ's"><Icon.HelpCircle /></Link></li>
                </ul>
                <p>&#169; {year}, Brolga Digital</p>
            </div>
        </div>
    )
    }
}

export var year = new Date().getFullYear()

export default Mobilemenu
