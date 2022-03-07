import { Link } from "gatsby";
import React from "react";
import Button from "./Button";
// import * as Icon from "react-feather";

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
                {/* {props?.cardData?.icon
                    ? iconSvg[props?.cardData?.icon]
                    : iconSvg[props.icon]} */}
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

const PriceCard = () => {
  return (
    <div>Cards</div>
  )
}

const CardWrapper = ({children}) => {
    return (
        <div className='uk-grid-small uk-grid-match uk-child-width-1-2@s' uk-grid=''>
            {children}
        </div>
    )
}

export { InfoCard, PriceCard, CardWrapper }
