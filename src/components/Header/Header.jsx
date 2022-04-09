import { useBasketContext } from '../../context/Basket'

var formatterGB = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
})

const Header = () => {
  const { products } = useBasketContext()
  const productCount = products.length
  const productTotal = products.reduce((accum, curr) => curr.price * curr.quantity + accum, 0)

  return (
    <div>
      {productCount} {formatterGB.format(productTotal)}
    </div>
  )
}

export default Header
