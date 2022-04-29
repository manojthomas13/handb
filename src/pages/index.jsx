import { getProducts } from '../providers/products'
import Products from '../components/Products'

const Home = ({ products }) => <Products products={products} />

export const getServerSideProps = async () => {
  return { props: { products: await getProducts() } }
}

export default Home
