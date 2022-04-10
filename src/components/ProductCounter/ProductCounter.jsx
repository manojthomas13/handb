import styles from './styles/ProductCounter.module.scss'

import ADD from '../../assets/add.svg'
import REMOVE from '../../assets/remove.svg'

const ProductCounter = ({ onChange, onAdd, onRemove, onDelete, value }) => {
  const onChangeQuantity = e => {
    onChange(parseInt(e.target.value, 10))
  }

  return (
    <div className={styles.container}>
      <div className={styles.counterContainer}>
        <button type="button" onClick={onRemove}>
          <REMOVE />
        </button>
        <input type="number" name="quantity" value={value} min="0" max="10" onChange={onChangeQuantity} />
        <button type="button" onClick={onAdd}>
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
