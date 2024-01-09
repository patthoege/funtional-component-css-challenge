import React from 'react'

function Item(props) {
    const item = props.item
  return (
    <div>
        <h5>{item.title}</h5>
        <p>{item.name}</p>
        <p>{item.image}</p>
        <p>{item.description}</p>
    </div>
  )
}

export default Item