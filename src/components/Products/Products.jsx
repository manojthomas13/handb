import Image from 'next/image'

import useProducts from './useProducts'
import styles from './styles/Products.module.scss'

const Items = () => {
  const { products } = useProducts()

  return (
    <div className={styles.products}>
      {products.map(product => (
        <div key={product.id}>
          <Image alt={product.title} src={product.image} width={384} height={384} />
          {product.title}
        </div>
      ))}
    </div>
  )
}

export default Items
