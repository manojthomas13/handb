/* eslint-disable import/no-anonymous-default-export */

import { getProductDiscounts } from '../../providers/products'

export default async (_, res) => {
  res.json({ discounts: await getProductDiscounts() })
}
