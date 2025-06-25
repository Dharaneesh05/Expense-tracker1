import React from 'react'

function CurrencyItem(props) {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.amount}</div>
      
    </div>
  )
}

export default CurrencyItem