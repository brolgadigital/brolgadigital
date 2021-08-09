import React from 'react'

export default function Headers(props) {
    return (
        <div className="heading">
            {props.subtitle ? <h2>{props.subtitle}</h2> : <></> }
            <h1>{props.title}</h1>
        </div>
    )
}
