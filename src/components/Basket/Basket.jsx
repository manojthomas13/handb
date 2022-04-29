import Image from 'next/image'

import { useBasketContext } from '../../context/Basket'
import { useProductDiscountsContext } from '../../context/ProductDiscounts'
import ProductCounter from '../ProductCounter'
import formatCurrency from '../../utils/formatCurrency'
import calculateBasket from '../../utils/calculateBasket'

import styles from './styles/Basket.module.css'

const Basket = () => {
  const { products, add, remove, empty, update, totalCount } = useBasketContext()
  const productDiscounts = useProductDiscountsContext()
  const productTotal = calculateBasket(products, productDiscounts)

  return (
    <>
      <div className={styles.products}>
        {products.map(product => {
          return (
            <div key={product.id} className={styles.productCard}>
              <Image alt={product.title} src={product.image} width={180} height={180} />
              <div>
                <div> {product.title}</div>
                <div> {formatCurrency(product.price)}</div>

                <ProductCounter
                  value={product.quantity}
                  onChange={qty => update(product.id, qty)}
                  onAdd={() => add(product)}
                  onRemove={() => remove(product.id)}
                  onDelete={() => remove(product.id, true)}
                />
              </div>
            </div>
          )
        })}
      </div>
      <button type="button" onClick={() => empty()} disabled={totalCount === 0}>
        Empty basket
      </button>
      <div>{`Total (${totalCount}) ${totalCount === 1 ? 'item' : 'items'} ${formatCurrency(productTotal)}`}</div>
    </>
  )
}

export default Basket
