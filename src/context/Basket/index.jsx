import { createContext, useContext } from 'react'
import useBasket from '../../hooks/useBasket'

const BasketContext = createContext()

export const useBasketContext = () => useContext(BasketContext)

export const BasketProvider = ({ children }) => {
  const { products, add, empty, remove, update } = useBasket()

  return <BasketContext.Provider value={{ products, add, empty, remove, update }}>{children}</BasketContext.Provider>
}

export default BasketContext
