import Head from 'next/head'
import { SWRConfig } from 'swr'

import '../styles/globals.css'
import styles from '../styles/Main.module.css'

import BasketContext from '../context/Basket'
import useBasket from '../hooks/useBasket'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  const { products, add, empty, remove, update } = useBasket()

  return (
    <>
      <Head>
        <title>H and B</title>
        <meta name="description" content="" />
      </Head>
      <SWRConfig value={{ fetcher: (resource, init) => fetch(resource, init).then(res => res.json()) }}>
        <BasketContext.Provider value={{ products, add, empty, remove, update }}>
          <Header />
          <div className={styles.container}>
            <Component {...pageProps} />
          </div>
        </BasketContext.Provider>
      </SWRConfig>
    </>
  )
}

export default MyApp
