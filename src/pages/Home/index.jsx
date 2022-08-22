import React from 'react'
import { Outlet  } from "react-router-dom"
import './index.less'
import Nav from './nav'

export default function Home() {

  return <div className="layout-container">
    <aside className="layout-left">
      <Nav />
    </aside>
    <article className="layout-right">
      <header className="layout-header">
        header
      </header>
      <div className="layout-main">
        main
        <Outlet />
      </div>
    </article>
  </div>
}
