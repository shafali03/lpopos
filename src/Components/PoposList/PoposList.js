import React from 'react'
import PoposSpace from '../PoposSpace/PoposSpace'
import './PoposList.css'
import data from '../../sfpopos-data.json'



function PoposList() {

  const spaces = data.map((obj) => {

    const title = obj.title
    const address = obj.address
    const images = obj.images

    return (
      <PoposSpace
        name={obj.title}
        address={obj.address}
        image={obj.images[0]}
      />
    )
  })

  return (
    <div data-test='component-PoposList' className="PoposList">
      {spaces}
    </div>
  )
}

export default PoposList