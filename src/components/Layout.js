import React from 'react'
import Webmenu from '../components/Webmenu'

export default function Layout({children}) {
  return (
    <div className="layout">
      <Webmenu />
      <div className="content">{children}</div>
    </div>
  )
}
