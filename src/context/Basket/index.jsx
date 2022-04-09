import { createContext, useContext } from 'react'

const BasketContext = createContext()

export const useBasketContext = () => useContext(BasketContext)

export default BasketContext
