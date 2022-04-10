import { useState } from 'react'

const ProductCounter = ({ onChange, onAdd, onRemove, onDelete, value }) => {
  const onChangeQuantity = e => {
    onChange(parseInt(e.target.value, 10))
  }

  return (
    <>
      <div>
        <button type="button" onClick={onRemove}>
          -
        </button>
        <input type="number" name="quantity" value={value} min="0" max="10" onChange={onChangeQuantity} />
        <button type="button" onClick={onAdd}>
          +
        </button>
      </div>
      <button type="button" onClick={onDelete}>
        Remove
      </button>
    </>
  )
}

export default ProductCounter
