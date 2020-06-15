
import React from 'react'

import data from '../../sfpopos-data.json'

function PoposDetails(props) {
  const { id } = props.match.params // Location index
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt="images" />
      </div>

      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{hours}</p>
        <p>{features}</p>
        <p>{geo.lat} {geo.lon}</p>
      </div>

    </div>
  )
}

export default PoposDetails