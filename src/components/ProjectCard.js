import React from 'react'
import ProjectCardImage from './ProjectCardImage'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import * as Icon from 'react-feather'

export default function ProjectCard(props) {
    return (
        <div className='card project-card'>
            <ProjectCardImage imageName={props.image} />

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
