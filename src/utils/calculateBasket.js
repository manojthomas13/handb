const getDiscountPrice = (product, discount) => {
  switch (discount.type) {
    case 'MULTI_BUY_TYPE_1': {
      const groupSalePrice =
        Math.floor(product.quantity / discount.customerBuys) * discount.customerPays * product.price
      const nonSalePrice = (product.quantity % discount.customerBuys) * product.price
      const price = groupSalePrice + nonSalePrice

      return price
    }
    case 'MULTI_BUY_TYPE_2': {
      const salePrice =
        discount.customerBuys * product.price - discount.customerDiscount * (discount.customerBuys * product.price)
      const groupSalePrice = Math.floor(product.quantity / discount.customerBuys) * salePrice
      const nonSalePrice = (product.quantity % discount.customerBuys) * product.price
      const price = groupSalePrice + nonSalePrice

      return price
    }
  }
}

const calculateBasket = (products, discounts) => {
  const productTotal = products.reduce((accum, product) => {
    const discountedProduct = discounts.find(d => d.id === product.id)
    const price = discountedProduct
      ? getDiscountPrice(product, discountedProduct.discount)
      : product.price * product.quantity

    return price + accum
  }, 0)

  return productTotal
}

export default calculateBasket
