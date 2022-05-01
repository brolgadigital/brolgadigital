import React from "react"
import UIkit from "uikit"

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
    return <div uk-alert='' className={"uk-alert" + props.type}>{props.children}</div>
}
const Tooltip = (props) => {
    return <div uk-tooltip={'title: ' + props.message}>{props.children}</div>
}

export const uikitComponents = {
    Accordian,
    Alert,
    Tooltip
}