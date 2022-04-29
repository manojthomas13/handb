import Link from 'next/link'
import useSWR from 'swr/immutable'
import { useBasketContext } from '../../context/Basket'
import formatCurrency from '../../utils/formatCurrency'
import getDiscountPrice from '../../utils/getDiscountPrice'
import styles from './styles/Header.module.css'

const calculateTotal = (products, discounts) => {
  const productTotal = products.reduce((accum, product) => {
    const discountedProduct = discounts.find(d => d.id === product.id)
    const price = discountedProduct
      ? getDiscountPrice(product, discountedProduct.discount)
      : product.price * product.quantity

    return price + accum
  }, 0)

  return productTotal
}

const Header = () => {
  const { products } = useBasketContext()
  const { data } = useSWR('/api/productDiscounts')
  const productCount = products.reduce((accum, curr) => curr.quantity + accum, 0)
  const productTotal = data ? calculateTotal(products, data.discounts) : 0

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/basket">
            <a className={styles.trolley}>
              {productCount} {formatCurrency(productTotal)}
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
