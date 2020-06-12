import React from 'react'

function PoposSpace(props) {
  const { name, image, address } = props

  return (
    <div data-test='component-poposSpace'>
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default PoposSpace