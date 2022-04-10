import Link from 'next/link'

import { useBasketContext } from '../../context/Basket'
import formatCurrency from '../../utils/formatCurrency'
import styles from './styles/Header.module.css'

const Header = () => {
  const { products } = useBasketContext()
  const productCount = products.reduce((accum, curr) => curr.quantity + accum, 0)
  const productTotal = products.reduce((accum, curr) => curr.price * curr.quantity + accum, 0)

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
