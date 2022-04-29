import { createContext, useContext } from 'react'

const ProductDiscountsContext = createContext()

export const useProductDiscountsContext = () => useContext(ProductDiscountsContext)

export default ProductDiscountsContext
