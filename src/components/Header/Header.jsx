import Link from 'next/link'
import { useBasketContext } from '../../context/Basket'
import { useProductDiscountsContext } from '../../context/ProductDiscounts'
import formatCurrency from '../../utils/formatCurrency'
import styles from './styles/Header.module.css'

const Header = () => {
  const { totalCount, calculateBasket } = useBasketContext()
  const productDiscounts = useProductDiscountsContext()
  const productTotal = calculateBasket(productDiscounts)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/basket">
            <a className={styles.trolley}>
              {totalCount} {formatCurrency(productTotal)}
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
