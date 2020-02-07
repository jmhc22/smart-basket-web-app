import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const BasketItem = (props) => {

  const qty = props.basketItem.quantity
  const grcy = props.basketItem.grocery

  return (
    <div data-test="bi-component">
      <span data-test="bi-info">{qty} x {grcy.name}</span>
    </div>
  )
}

export default BasketItem