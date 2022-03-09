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
                    class="logo"
                    src="../images/bd-text-paleblue-01.png"
                    alt="Brolga Digital"
                    loading="eager"
                    placeholder="tracedSVG"
                />
                <div className="headliner">
                    <p>Supporting Small Bussiness and Sole Traders</p>
                    <div>
                        <Link className="uk-button" to='/contact'>Book Now</Link>
                        <Link className="uk-button" to="/#home">Learn More</Link>

                        {/* <Button className='uk-button' text="Book Now" to="/contact/" />
                        <Button text="Learn More" to="/#home" /> */}
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
        <div className="content homepage homenew">
            <div className="titles">
                <StaticImage
                    class="logo"
                    src="../images/bd-text-paleblue-01.png"
                    alt="Brolga Digital"
                    loading="eager"
                    placeholder="tracedSVG"
                />
                <div className="headliner">
                    <p>Supporting Small Bussiness and Sole Traders</p>
                    
                    <div className="cardwrapper">
                        {testimonial.map((quote) => (
                            <div className="home-test card">
                                <p>{quote.frontmatter.quote}</p>
                                <h3>{quote.frontmatter.quoteAttribute}</h3>
                                <p>{quote.frontmatter.title}</p>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
            <div className="slide-container home-gallery">
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
