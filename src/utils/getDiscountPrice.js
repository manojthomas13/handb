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

export default getDiscountPrice
