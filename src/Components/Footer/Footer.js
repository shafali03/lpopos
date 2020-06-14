import React from 'react'
import './Footer.css'



function Footer() {

  const year = new Date()

  return (
    <div className="Footer" data-test="component-footer">
      <p>&copy; {year.getFullYear()} Shafique Mohammed </p>
    </div>
  )
}

export default Footer