import { renderHook } from '@testing-library/react-hooks'
import { getProducts } from '../../../utils/api'

import useProducts from '../useProducts'

jest.mock('../../../utils/api')

describe('useProducts', () => {
  beforeEach(() => {
    getProducts.mockResolvedValue({
      products: [
        { id: 'product-1', name: 'Product 1' },
        { id: 'product-2', name: 'Product 2' },
      ],
    })
  })

  it('calls api methods to fetch products', async () => {
    const { waitForNextUpdate } = renderHook(() => useProducts())

    await waitForNextUpdate()

    expect(getProducts).toBeCalledTimes(1)
  })

  it('returns a list of products', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProducts())

    await waitForNextUpdate()

    expect(result.current.products).toEqual([
      { id: 'product-1', name: 'Product 1' },
      { id: 'product-2', name: 'Product 2' },
    ])

    expect(result.current.error).toEqual('')
  })

  it('returns an error if the api method to fetch products throws an error', async () => {
    getProducts.mockRejectedValue(new Error('Error getting products'))

    const { result, waitForNextUpdate } = renderHook(() => useProducts())

    await waitForNextUpdate()

    expect(result.current.products).toEqual([])
    expect(result.current.error).toEqual('Error getting products')
  })
})
