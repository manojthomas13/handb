import { useReducer } from 'react'
import calculateBasket from '../utils/calculateBasket'

const actions = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  EMPTY: 'EMPTY',
  UPDATE: 'UPDATE',
}

const useBasket = () => {
  const [products, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case actions.ADD: {
        const item = state.find(({ id }) => id === action.product.id)
        const items = item
          ? [...state.filter(({ id }) => id != action.product.id), { ...item, quantity: item.quantity + 1 }]
          : [...state, { ...action.product, quantity: 1 }]

        return items
      }
      case actions.REMOVE: {
        const item = state.find(({ id }) => id === action.id)
        const items = item
          ? item.quantity === 1 || action.isDelete
            ? state.filter(({ id }) => id != action.id)
            : [...state.filter(({ id }) => id != action.id), { ...item, quantity: item.quantity - 1 }]
          : state

        return items
      }
      case actions.EMPTY: {
        return []
      }
      case actions.UPDATE: {
        const item = state.find(({ id }) => id === action.id)
        const items = item
          ? action.quantity === 0
            ? state.filter(({ id }) => id != action.id)
            : [...state.filter(({ id }) => id != action.id), { ...item, quantity: action.quantity }]
          : state

        return items
      }
      default:
        break
    }
  }, [])

  return {
    products: products.sort((a, b) => a.id.localeCompare(b.id)),
    totalCount: products.reduce((accum, curr) => curr.quantity + accum, 0),
    calculateBasket: discounts => calculateBasket(products, discounts),
    add: product => dispatch({ type: actions.ADD, product }),
    remove: (id, isDelete = false) => dispatch({ type: actions.REMOVE, id, isDelete }),
    empty: () => dispatch({ type: actions.EMPTY }),
    update: (id, quantity) => dispatch({ type: actions.UPDATE, id, quantity }),
  }
}

export default useBasket
