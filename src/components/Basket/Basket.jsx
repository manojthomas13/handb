import { useBasketContext } from '../../context/Basket'
import ProductCounter from '../ProductCounter'
import formatCurrency from '../../utils/formatCurrency'

import styles from './styles/Basket.module.css'

const Basket = () => {
  const { products, add, remove, empty } = useBasketContext()
  const productCount = products.reduce((accum, curr) => curr.quantity + accum, 0)
  const productTotal = products.reduce((accum, curr) => curr.price * curr.quantity + accum, 0)

  return (
    <>
      <div className={styles.products}>
        {products.map(product => {
          return (
            <div key={product.id}>
              <div> {product.title}</div>
              <div> {product.price}</div>

              <ProductCounter
                value={product.quantity}
                onChange={qty => update(product.id, qty)}
                onAdd={() => add(product)}
                onRemove={() => remove(product.id)}
                onDelete={() => remove(product.id, true)}
              />
            </div>
          )
        })}
      </div>
      <button type="button" onClick={() => empty()} disabled={productCount === 0}>
        Empty basket
      </button>
      <div>{`Total (${productCount}) ${productCount === 1 ? 'item' : 'items'} ${formatCurrency(productTotal)}`}</div>
    </>
  )
}

export default Basket
