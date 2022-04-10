import Link from 'next/link'

import { useBasketContext } from '../../context/Basket'
import formatCurrency from '../../utils/formatCurrency'

const Header = () => {
  const { products } = useBasketContext()
  const productCount = products.reduce((accum, curr) => curr.quantity + accum, 0)
  const productTotal = products.reduce((accum, curr) => curr.price * curr.quantity + accum, 0)

  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/basket">
        <a>
          {productCount} {formatCurrency(productTotal)}
        </a>
      </Link>
    </div>
  )
}

export default Header
