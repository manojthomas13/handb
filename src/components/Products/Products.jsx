import Image from 'next/image'

import useProducts from './useProducts'
import styles from './styles/Products.module.scss'
import { useBasketContext } from '../../context/Basket'
import ProductCounter from '../ProductCounter'

const getProductFromBasket = (products, id) => products.find(product => id === product.id)

const Products = () => {
  const { products } = useProducts()
  const { products: basketProducts, add, remove, update } = useBasketContext()

  return (
    <div className={styles.products}>
      {products.map(product => {
        const productInBasket = getProductFromBasket(basketProducts, product.id)

        return (
          <div key={product.id}>
            <Image alt={product.title} src={product.image} width={384} height={384} />
            <div> {product.title}</div>
            <div> {product.price}</div>

            {productInBasket ? (
              <>
                <ProductCounter
                  value={productInBasket.quantity}
                  onChange={qty => update(product.id, qty)}
                  onAdd={() => add(product)}
                  onRemove={() => remove(product.id, true)}
                />

                <button type="button" onClick={() => remove(product.id, true)}>
                  Remove
                </button>
              </>
            ) : (
              <button type="button" onClick={() => add(product)}>
                Add to basket
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Products
