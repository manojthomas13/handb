import Link from 'next/link'
import { useBasketContext } from '../../context/Basket'

var formatterGB = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
})

const Header = () => {
  const { products } = useBasketContext()
  const productCount = products.reduce((accum, curr) => curr.quantity + accum, 0)
  const productTotal = products.reduce((accum, curr) => curr.price * curr.quantity + accum, 0)

  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/basket">
        <a>
          {productCount} {formatterGB.format(productTotal)}
        </a>
      </Link>
    </div>
  )
}

export default Header
