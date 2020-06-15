import React from 'react'
import PoposSpace from '../PoposSpace/PoposSpace'
import './PoposList.css'
import data from '../../sfpopos-data.json'



function PoposList() {

  const spaces = data.map(({ title, address, images, hours }, i) => {

    return (
      <PoposSpace
        id={i}
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
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