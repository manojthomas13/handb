import { renderHook, act } from '@testing-library/react-hooks'

import useBasket from '../useBasket'

test('returns an empty list of items from the basket', () => {
  const { result } = renderHook(() => useBasket())

  expect(result.current.products).toEqual([])
})

test('adds an item to the basket', () => {
  const { result } = renderHook(() => useBasket())

  act(() => {
    result.current.add({ id: 'product-1', name: 'Product 1' })
  })

  expect(result.current.products).toEqual([{ id: 'product-1', name: 'Product 1', quantity: 1 }])
})

test('increases the quantity of the item, if the item already exists in the basket', () => {
  const { result } = renderHook(() => useBasket())

  act(() => {
    result.current.add({ id: 'product-1', name: 'Product 1' })
    result.current.add({ id: 'product-1', name: 'Product 1' })
  })

  expect(result.current.products).toEqual([{ id: 'product-1', name: 'Product 1', quantity: 2 }])
})

test('decreases the quantity of the item, if the item already exists in the basket', () => {
  const { result } = renderHook(() => useBasket())

  act(() => {
    result.current.add({ id: 'product-1', name: 'Product 1' })
    result.current.add({ id: 'product-1', name: 'Product 1' })
  })

  expect(result.current.products).toEqual([{ id: 'product-1', name: 'Product 1', quantity: 2 }])

  act(() => {
    result.current.remove('product-1')
  })

  expect(result.current.products).toEqual([{ id: 'product-1', name: 'Product 1', quantity: 1 }])
})

test('removes an item from the basket, if the item already exists in the basket and quantity is 1', () => {
  const { result } = renderHook(() => useBasket())

  act(() => {
    result.current.add({ id: 'product-1', name: 'Product 1' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-3', name: 'Product 3' })
  })

  expect(result.current.products).toEqual([
    { id: 'product-1', name: 'Product 1', quantity: 1 },
    { id: 'product-2', name: 'Product 2', quantity: 1 },
    { id: 'product-3', name: 'Product 3', quantity: 1 },
  ])

  act(() => {
    result.current.remove('product-1')
  })

  expect(result.current.products).toEqual([
    { id: 'product-2', name: 'Product 2', quantity: 1 },
    { id: 'product-3', name: 'Product 3', quantity: 1 },
  ])
})

test('removes an item from the basket, if the item already exists', () => {
  const { result } = renderHook(() => useBasket())

  act(() => {
    result.current.add({ id: 'product-1', name: 'Product 1' })
    result.current.add({ id: 'product-1', name: 'Product 1' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-3', name: 'Product 3' })
  })

  expect(result.current.products).toEqual([
    { id: 'product-1', name: 'Product 1', quantity: 2 },
    { id: 'product-2', name: 'Product 2', quantity: 4 },
    { id: 'product-3', name: 'Product 3', quantity: 1 },
  ])

  act(() => {
    result.current.remove('product-1')
    result.current.remove('product-2', true)
  })

  expect(result.current.products).toEqual([
    { id: 'product-3', name: 'Product 3', quantity: 1 },
    { id: 'product-1', name: 'Product 1', quantity: 1 },
  ])
})

test('empties the basket', () => {
  const { result } = renderHook(() => useBasket())

  act(() => {
    result.current.add({ id: 'product-1', name: 'Product 1' })
    result.current.add({ id: 'product-1', name: 'Product 1' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-3', name: 'Product 3' })
  })

  expect(result.current.products).toEqual([
    { id: 'product-1', name: 'Product 1', quantity: 2 },
    { id: 'product-2', name: 'Product 2', quantity: 4 },
    { id: 'product-3', name: 'Product 3', quantity: 1 },
  ])

  act(() => {
    result.current.empty()
  })

  expect(result.current.products).toEqual([])
})

test('does not throw any errors when trying to remove an item from an empty basket ', () => {
  const { result } = renderHook(() => useBasket())

  act(() => {
    result.current.add({ id: 'product-1', name: 'Product 1' })
    result.current.add({ id: 'product-1', name: 'Product 1' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-3', name: 'Product 3' })
  })

  expect(result.current.products).toEqual([
    { id: 'product-1', name: 'Product 1', quantity: 2 },
    { id: 'product-2', name: 'Product 2', quantity: 4 },
    { id: 'product-3', name: 'Product 3', quantity: 1 },
  ])

  act(() => {
    result.current.empty()
  })

  act(() => {
    result.current.remove('product-1')
  })

  expect(result.current.products).toEqual([])
})

test('does not throw any errors when trying to remove an item that do no exits in a basket ', () => {
  const { result } = renderHook(() => useBasket())

  act(() => {
    result.current.add({ id: 'product-1', name: 'Product 1' })
    result.current.add({ id: 'product-1', name: 'Product 1' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-2', name: 'Product 2' })
    result.current.add({ id: 'product-3', name: 'Product 3' })
  })

  expect(result.current.products).toEqual([
    { id: 'product-1', name: 'Product 1', quantity: 2 },
    { id: 'product-2', name: 'Product 2', quantity: 4 },
    { id: 'product-3', name: 'Product 3', quantity: 1 },
  ])

  act(() => {
    result.current.remove('product-4')
  })

  expect(result.current.products).toEqual([
    { id: 'product-1', name: 'Product 1', quantity: 2 },
    { id: 'product-2', name: 'Product 2', quantity: 4 },
    { id: 'product-3', name: 'Product 3', quantity: 1 },
  ])
})
