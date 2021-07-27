import React from 'react'

export default function Button(props) {

    let classes = 'button'
    if (props.class) {
        let addClass = props.class
        classes = 'button '+addClass
    }

    return (
        <a className={classes} href={props.to}>
            <p>{props.text}</p>
        </a>
    )
}

Button.defaultProps = {
    text: 'Learn More',
    to: '',
}