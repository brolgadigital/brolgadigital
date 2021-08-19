import React from 'react'
import { Helmet } from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'
import Webmenu from '../components/Webmenu'
import config from '../../brolga-config'

export default function Layout({children}) {

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const {
    site: {
      siteMetadata,
      siteMetadata: {description: siteDescription},
    },
  } = data

  const frontmatter = {}
  const {
    description = siteDescription,
    title = config.siteTitle,
  } = frontmatter

  return (
    <div className="layout">
      <Helmet
        title={title}
        meta={[
          {name: 'description', content: description},
        ]}
      >
        <html lang="en" />
        <noscript>This site runs best with JavaScript enabled.</noscript>
      </Helmet>

      <Webmenu />
      <div className="content">{children}</div>
    </div>
  )
}
