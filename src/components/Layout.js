import React from 'react'
import { Helmet } from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'
import Webmenu from '../components/Webmenu'
import Mobilemenu from '../components/Mobilemenu'
import config from '../../brolga-config'
import SplashScreen from './SplashScreen'
import { globalHistory } from "@reach/router"

export default function Layout({children}) {
    const path = globalHistory.location.pathname

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
    //   siteMetadata,
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

      <div className="sidemenu">
        <Webmenu />
      </div>

      
        <Mobilemenu />
      {path === '/' ? <SplashScreen/> : ''}

      <div className="content">{children}</div>
    </div>
  )
}
