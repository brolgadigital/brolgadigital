import React from "react"
import UIkit from "uikit"
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { StaticQuery, graphql } from "gatsby"
import { render } from "react-dom";

const Accordian = (props) => {
    return (
        <ul uk-accordion=''>
            <li>
                <a class="uk-accordion-title" href="#">{props.title}</a>
                <div class="uk-accordion-content">{props.children}</div>
            </li>
        </ul>
    )
}
const Alert = (props) => {
    return <div uk-alert='' className={"uk-alert uk-alert-" + props.type}>{props.children}</div>
}
const Tooltip = (props) => {
    return <span uk-tooltip={'title: ' + props.message}>{props.children}</span>
}

const Image = (props) => {
    return (
        <StaticQuery
        query={graphql`
            query {
                images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
                    edges {
                        node {
                            extension
                            url
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        `}
        render={({ images }) => renderImage(images.edges.find(image => image.node.url === props.src), props)}
        />
    )
}
function renderImage(data, props) {
    return <GatsbyImage image={data.node.childImageSharp.gatsbyImageData} alt={props.alt} />
}

const BetterPTags = (props) => {
    if(typeof props.children === 'object' && props.children !== null){
        if(Array.isArray(props.children)){
            return <p {...props}></p>
        }
        if(props.children.props.originalType === 'img') {
            return  <figure>{props.children}<figcaption>{props.children.props.title}</figcaption></figure>
        }
        else return <p {...props}></p>
    }
    else return <p {...props}></p>
};

const ImageRow = (props) => {
    return (
        <figure>
            {props.children.map(data => {
                return Image(data.props.children.props)
            })}
        <figcaption>{props.caption}</figcaption>
        </figure>
    )
}
const ImageCol = (props) => {
    return (
        <figure>
            {props.children.map(data => {
                return Image(data.props.children.props)
            })}
        <figcaption>{props.caption}</figcaption>
        </figure>
    )
}

export const uikitComponents = {
    Accordian,
    Alert,
    img: Image,
    p: BetterPTags,
    Tooltip,
    ImageRow,
    ImageCol
}

