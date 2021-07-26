import React from 'react'

export default function Button(props) {

    let classes = 'button'
    if (props.class) {
        let addClass = props.class
        classes = 'button '+addClass
    }

    return (
        <div className={classes}>
            <p>{props.text}</p>
        </div>
    )
}

Button.defaultProps = {
    text: 'Learn More',
}