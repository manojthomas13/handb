import { useReducer } from 'react'

const actions = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  EMPTY: 'EMPTY',
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
      default:
        break
    }
  }, [])

  const add = product => {
    dispatch({ type: actions.ADD, product })
  }

  const remove = (id, isDelete = false) => {
    dispatch({ type: actions.REMOVE, id, isDelete })
  }

  const empty = () => {
    dispatch({ type: actions.EMPTY })
  }

  return { products, add, remove, empty }
}

export default useBasket
