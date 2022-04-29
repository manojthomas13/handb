import Image from 'next/image'

import styles from './styles/Products.module.css'
import { useBasketContext } from '../../context/Basket'
import ProductCounter from '../ProductCounter'
import formatCurrency from '../../utils/formatCurrency'

const getProductFromBasket = (products, id) => products.find(product => id === product.id)

const Products = ({ products }) => {
  const { products: basketProducts, add, remove, update } = useBasketContext()

  return (
    <div className={styles.products}>
      {products.map(product => {
        const productInBasket = getProductFromBasket(basketProducts, product.id)

        return (
          <div key={product.id}>
            <Image alt={product.title} src={product.image} width={384} height={384} />
            <div> {product.title}</div>
            <div> {formatCurrency(product.price)}</div>

            {productInBasket ? (
              <ProductCounter
                value={productInBasket.quantity}
                onChange={qty => update(product.id, qty)}
                onAdd={() => add(product)}
                onRemove={() => remove(product.id)}
                onDelete={() => remove(product.id, true)}
              />
            ) : (
              <button type="button" onClick={() => add(product)} className={styles.buttonAddToBasket}>
                Add to Basket
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Products
