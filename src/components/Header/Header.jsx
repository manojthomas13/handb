import Link from 'next/link'
import { useBasketContext } from '../../context/Basket'
import { useProductDiscountsContext } from '../../context/ProductDiscounts'
import formatCurrency from '../../utils/formatCurrency'
import calculateBasket from '../../utils/calculateBasket'
import styles from './styles/Header.module.css'

const Header = () => {
  const { products } = useBasketContext()
  const productDiscounts = useProductDiscountsContext()
  const productCount = products.reduce((accum, curr) => curr.quantity + accum, 0)
  const productTotal = calculateBasket(products, productDiscounts)

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
