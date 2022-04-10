import { useReducer } from 'react'

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

        return items.sort((a, b) => a.id.localeCompare(b.id))
      }
      case actions.REMOVE: {
        const item = state.find(({ id }) => id === action.id)
        const items = item
          ? item.quantity === 1 || action.isDelete
            ? state.filter(({ id }) => id != action.id)
            : [...state.filter(({ id }) => id != action.id), { ...item, quantity: item.quantity - 1 }]
          : state

        return items.sort((a, b) => a.id.localeCompare(b.id))
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

        return items.sort((a, b) => a.id.localeCompare(b.id))
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

  const update = (id, quantity) => {
    dispatch({ type: actions.UPDATE, id, quantity })
  }

  return { products, add, remove, empty, update }
}

export default useBasket
