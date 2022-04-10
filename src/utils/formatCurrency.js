const formatCurrency = value => {
  const formatterGB = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  })

  return formatterGB.format(value)
}

export default formatCurrency
