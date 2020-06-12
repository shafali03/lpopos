import React from 'react'
import PoposSpace from '../PoposSpace/PoposSpace'

function PoposList() {
  return (
    <div className="PoposList" data-test='component-PoposList'>
      <PoposSpace
        name="50 California Street"
        address="50 California St"
        image="50-california-st.jpg"
      />

      <PoposSpace
        name="100 Pine"
        address="100 Pine St"
        image="100-pine.jpg"

      />
      <PoposSpace
        name="101 California"
        address="101 California St"
        image="101-california.jpg"
      />

      <PoposSpace
        name="343 Sansome roof garden"
        address="Sansome St"
        image="343-sansome-roof-garden.jpg"
      />

      <PoposSpace
        name="citigroup center"
        address="Citigroup center St"
        image="citigroup-center.jpg"
      />
      <PoposSpace
        name="525 Market Street Plaza"
        address="525 Market St."
        image="525-market-street-plaza.jpg"
      />
    </div>
  )
}

export default PoposList