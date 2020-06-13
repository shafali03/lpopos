import React from 'react'
import './PoposSpace.css'

function PoposSpace(props) {
  const { name, image, address } = props

  return (
    <div data-test='component-poposSpace'>
      <img className="PoposSpace" src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300" height="300" alt="Hello" />
      <h3 className="PoposSpace">{name}</h3>
      <div className="PoposSpace">{address}</div>
    </div>
  )
}

export default PoposSpace