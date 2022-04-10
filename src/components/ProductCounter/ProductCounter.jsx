import { useState, useEffect } from 'react'

import styles from './styles/ProductCounter.module.scss'

import ADD from '../../assets/add.svg'
import REMOVE from '../../assets/remove.svg'

const ProductCounter = ({ onChange, onAdd, onRemove, onDelete, value }) => {
  const [quantity, setQuantity] = useState(value)

  useEffect(() => {
    setQuantity(value)
  }, [value])

  const onChangeQuantity = e => {
    setQuantity(e.target.value)

    if (e.target.value) {
      onChange(parseInt(e.target.value, 10))
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.counterContainer}>
        <button type="button" onClick={onRemove} className={styles.buttonLeft}>
          <REMOVE />
        </button>
        <input
          type="number"
          name="quantity"
          value={quantity}
          min="0"
          max="10"
          onChange={onChangeQuantity}
          onBlur={e => {
            if (!e.target.value) {
              setQuantity(value)
            }
          }}
        />
        <button type="button" onClick={onAdd} className={styles.buttonRight}>
          <ADD />
        </button>
      </div>
      <button type="button" onClick={onDelete} className={styles.deleteProduct}>
        Remove
      </button>
    </div>
  )
}

export default ProductCounter
