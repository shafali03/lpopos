import React from 'react'

function About() {
  const imageName = require('../../image/citigroup-center.jpg')

  return (
    <div>
      <h1>About SFPOPOS</h1>
      <div>
        <img src={imageName} />

      </div>
      <p>
        POPOS are publicly accessible spaces in
        forms of plazas, terraces, atriums, small
        parks, and even snippets which are provided
        and maintained by private developers. In San
        Francisco, POPOS mostly appear in the Downtown
        office district area.
    </p>
    </div>
  )
}

export default About