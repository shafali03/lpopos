import React from 'react'
import './Title.css'

function Title() {
  return (

    <div className="Title" data-test='component-title'>
      <header>
        <h1>LPOPOS</h1>
        <h2 className="Title-Subtile">London Privately Owned Public Open Spaces</h2>
      </header>
    </div>
  )
}

export default Title