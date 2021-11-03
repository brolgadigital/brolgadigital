import React from 'react'

export default function Headers(props) {
    return (
        <div className="heading">
            {props.subtitle ? <p>{props.subtitle}</p> : <></> }
            <h1>{props.title}</h1>
        </div>
    )
}
