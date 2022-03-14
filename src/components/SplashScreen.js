import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Fade } from "react-slideshow-image";
import Button from "../components/Button";
import { useStaticQuery, graphql, Link } from "gatsby";

const SplashScreen = () => {
    return (
        <div className='bd-splashscreen' uk-height-viewport='expand: true'>
            <div className="uk-inline">

                <div className="uk-overlay uk-position-center bd-splashscreen-overlay">
                    <StaticImage
                        class="bd-splashscreen-logo"
                        src="../images/bd-text-paleblue-01.png"
                        alt="Brolga Digital"
                        loading="eager"
                        placeholder="tracedSVG"
                    />
                    <div className="uk-card uk-card-secondary uk-card-body uk-margin-medium uk-text-large uk-text-center bd-splashscreen-text">
                        <p>Supporting Small Bussiness and Sole Traders</p>
                        <div>
                            <Link className="uk-button uk-button-large bd-spalashscreen-button" to='/contact'>Book Now</Link>
                            <Link className="uk-button uk-button-large bd-spalashscreen-button" to="/#home">Learn More</Link>
                        </div>
                    </div>
                </div>


                <div className="bd-splashscreen-gallery">
                    <Fade {...fadeProperties}>
                        <div className="each-fade">
                            <StaticImage
                                src="../images/landing/domenico-loia-hGV2TfOh0ns-unsplash.jpeg"
                                alt=""
                                loading="eager"
                            />
                        </div>
                        <div className="each-fade">
                            <StaticImage
                                src="../images/landing/rizky-subagja-YgaZnuH2udI-unsplash.jpeg"
                                alt=""
                                loading="eager"
                            />
                        </div>
                        <div className="each-fade">
                            <StaticImage
                                src="../images/landing/sigmund-0s43f-8Dz_0-unsplash.jpeg"
                                alt=""
                                loading="eager"
                            />
                        </div>
                        <div className="each-fade">
                            <StaticImage
                                src="../images/landing/sigmund-4UGmm3WRUoQ-unsplash.jpeg"
                                alt=""
                                loading="eager"
                            />
                        </div>
                    </Fade>
                </div>

            
            </div>

        </div>
    );
};

const SplashScreen2 = () => {
    
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {layout: {eq: "portfolio"}}}) {
                
                    nodes {
                        frontmatter {
                            quote
                            quoteAttribute
                            title
                            layout
                        }
                    }
            
            }
        }
    `)

    const testimonial = data.allMarkdownRemark.nodes
    console.log(testimonial)
    
    return (
        <div className='bd-splashscreen' uk-height-viewport='expand: true'>
            <div className="uk-inline">

                <div className="uk-overlay uk-position-center bd-splashscreen-overlay">
                    <StaticImage
                        class="logo"
                        src="../images/bd-text-paleblue-01.png"
                        alt="Brolga Digital"
                        loading="eager"
                        placeholder="tracedSVG"
                    />
                    <div className="uk-card uk-card-secondary uk-card-body uk-margin-medium uk-text-large uk-text-center bd-splashscreen-text">
                        <p>Supporting Small Bussiness and Sole Traders</p>

                        <div uk-slideshow='animation: slide; ratio: 1:1; max-height: fit-content;'>
                            <ul class="uk-slideshow-items bd-splashscreen-testimonial">
                                {testimonial.map((quote, i) => (
                                <li uk-slideshow-item={i}>
                                    <div className="uk-text-small uk-card uk-card-body uk-card-default uk-margin-auto uk-width-4-5">
                                        <p>{quote.frontmatter.quote}</p>
                                        <h3>{quote.frontmatter.quoteAttribute}</h3>
                                        <p>{quote.frontmatter.title}</p>
                                    </div>
                                </li>
                            ))}
                            </ul>
                            
                            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous='' uk-slideshow-item="previous"></a>
                            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next='' uk-slideshow-item="next"></a>

                        </div>
                        
                    </div>
                </div>

                <div className="bd-splashscreen-gallery">
                    <Fade {...fadeProperties}>
                        <div className="each-fade">
                            <StaticImage
                                src="../images/landing/domenico-loia-hGV2TfOh0ns-unsplash.jpeg"
                                alt=""
                                loading="eager"
                            />
                        </div>
                        <div className="each-fade">
                            <StaticImage
                                src="../images/landing/rizky-subagja-YgaZnuH2udI-unsplash.jpeg"
                                alt=""
                                loading="eager"
                            />
                        </div>
                        <div className="each-fade">
                            <StaticImage
                                src="../images/landing/sigmund-0s43f-8Dz_0-unsplash.jpeg"
                                alt=""
                                loading="eager"
                            />
                        </div>
                        <div className="each-fade">
                            <StaticImage
                                src="../images/landing/sigmund-4UGmm3WRUoQ-unsplash.jpeg"
                                alt=""
                                loading="eager"
                            />
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export {SplashScreen, SplashScreen2};

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    cssClass: "home-gallery",
};
