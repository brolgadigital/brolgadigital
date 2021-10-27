import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import * as Icon from 'react-feather'

export default function ProjectCard(props) {
    return (
        <div className='card project-card'>
            <GatsbyImage image={props.image} className='project-image' alt='' />
            <div className='project-outline'>
                <h3>{props.title}</h3>
                    <hr></hr>
                <p>{props.desc}</p>

                <Link to={props.case}><Icon.CheckCircle />How We Helped</Link>
                <OutboundLink href={props.website}><Icon.ExternalLink />View Live Project</OutboundLink>
            </div>
        </div>
    )
}
