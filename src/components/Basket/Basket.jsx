import { useBasketContext } from '../../context/Basket'

const formatterGB = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
})

const Basket = () => {
  const { products, add, remove, empty } = useBasketContext()
  const productCount = products.reduce((accum, curr) => curr.quantity + accum, 0)
  const productTotal = products.reduce((accum, curr) => curr.price * curr.quantity + accum, 0)

  return (
    <>
      <div>
        {products.map(product => {
          return (
            <div key={product.id}>
              <div> {product.title}</div>
              <div> {product.price}</div>

              <>
                <div>
                  <button type="button" onClick={() => remove(product.id)}>
                    -
                  </button>
                  <input type="number" name="quantity" value={product.quantity} min="0" max="10" />
                  <button type="button" onClick={() => add(product)}>
                    +
                  </button>
                </div>

                <button type="button" onClick={() => remove(product.id, true)}>
                  Remove
                </button>
              </>
            </div>
          )
        })}
      </div>
      <button type="button" onClick={() => empty()} disabled={productCount === 0}>
        Empty basket
      </button>
      <div>{`Total (${productCount}) ${productCount === 1 ? 'item' : 'items'} ${formatterGB.format(
        productTotal
      )}`}</div>
    </>
  )
}

export default Basket
