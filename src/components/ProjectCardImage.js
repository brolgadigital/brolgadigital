import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProjectCardImage = (props) => {
  const data = useStaticQuery(graphql`
    query PortfolioImage {
      allFile(filter: {relativeDirectory: {eq: "portfolio"}}) {
        edges {
          node {
            name
            childImageSharp {
              id
              gatsbyImageData(
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  `)

  const useImage = data.allFile.edges.find(
    element => { return ( element.node.name.includes(props.imageName) )}
  )
  
  if (useImage) { 
    const imageData = useImage.node.childImageSharp.gatsbyImageData
    return ( <GatsbyImage image={imageData} className={props.class} alt='' /> )
  }
  return (null)
}
export default ProjectCardImage