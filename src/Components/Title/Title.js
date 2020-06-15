import React from 'react'
import './Title.css'
import { NavLink } from 'react-router-dom'

function Title() {
  return (

    <div className="Title" data-test='component-title'>
      <header>
        <h1>SFPOPOS</h1>
        <h2 className="Title-Subtile">San Francisco Privately Owned Public Open Spaces</h2>

        <div>
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/">List</NavLink>

          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/about">About</NavLink>
        </div>
      </header>
    </div>
  )
}

export default Title