import { Link } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const InfoCard = (props) => {
    
    if (props?.cardData?.display === false) {
        return null;
    }
    let setIcon = ''
    if (props?.cardData?.icon) {
        setIcon = props?.cardData?.icon
    }
    else {
        setIcon = props.icon
    }

    return (
        <div>
        <div className='uk-card'>
            <div className="uk-card-header">
                <span uk-icon={
                    'icon: ' + setIcon + 
                    '; ratio: 2'
                    }
                className='uk-margin-small-bottom uk-preserve'
                ></span>
                <h3 className="uk-card-title uk-margin-remove-top">
                    {props?.cardData?.boxtitle
                        ? props?.cardData?.boxtitle
                        : props.title}
                </h3>
                <hr className="bd-card-hr" />
            </div>
            <div className="uk-card-body uk-padding-remove-vertical">
            <p>
                {props?.cardData?.blurb ? props?.cardData?.blurb : props.desc}
            </p>
            </div>
            <div className="uk-card-footer">
            {props.info ? (
                <Link to={props.info}>Learn More</Link>
            ) : (
                <></>
            )}
            </div>
        </div>
        </div>
    );
}

const PriceCard = (props) => {

    const listItems = props.details.map((detail, index) => (
        <li key={index}>{detail}</li>
    ));

    return (
        <div>
        <div className="uk-card uk-text-center">
            <div className="uk-card-header">
                <h3 className="uk-card-title">{props.title}</h3>
                <p>
                    {props.minimum ? "starting from" : <></>}<span className="bd-card-price">{props.price}</span>
                    {props.single ? <></> : "per month"}
                </p>
                <hr className="bd-card-hr bd-card-hr-center"/>
            </div>

            <div className="uk-card-body">
                <p>{props.desc}</p>
                <h4>Includes:</h4>
                <ul className="uk-list">{listItems}</ul>
            </div>
        </div>
        </div>
    )
}

const ProjectCard = (props) => {
    return (
        <div className="uk-margin-medium-bottom">
        <div className="uk-card uk-padding-small uk-padding-remove-horizontal">
            <div className="uk-card-header">
            <GatsbyImage image={props.image} className="project-image" alt="" />
            </div>
            <div className="uk-card-body uk-padding-remove-bottom">
            <div className="project-outline">
                <h3>{props.title}</h3>
                <hr></hr>
                <p>{props.desc}</p>
            </div>
            </div>
            <div className="uk-card-footer uk-flex uk-flex-between">

                <Link className='uk-button uk-button-default' to={props.case}>
                    <span className='uk-margin-small-right' uk-icon='icon: info; ratio: 1'></span>
                    How We Helped
                </Link>
                <OutboundLink className="uk-button uk-button-default" href={props.website}>
                    <span className='uk-margin-small-right' uk-icon='icon: upload; ratio: 1'></span>
                    View Live Project
                </OutboundLink>
            
            </div>
        </div>
        </div>
    )
}

const CardWrapper = ({children}) => {
    return (
        <div className='uk-grid-small uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-margin-bottom' uk-grid=''>
            {children}
        </div>
    )
}

export { InfoCard, PriceCard, ProjectCard, CardWrapper }
