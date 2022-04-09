import { useEffect, useState } from 'react'
import { getProducts } from '../../utils/api'

const useProducts = () => {
  const [products, setProdcuts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { products } = await getProducts()

        setProdcuts(products)
        setError('')
      } catch (e) {
        setError(e.message)
      }
    }

    fetchProducts()
  }, [])

  return { products, error }
}

export default useProducts
