import Head from 'next/head'
import { SWRConfig } from 'swr'
import App, { AppContext } from 'next/app'

import '../styles/globals.css'
import styles from '../styles/Main.module.css'

import { BasketProvider } from '../context/Basket'
import ProductDiscountsContext from '../context/ProductDiscounts'
import Header from '../components/Header'
import { getProductDiscounts } from '../providers/products'

class CustomApp extends App {
  render() {
    const { Component, pageProps, productDiscounts } = this.props

    console.log({ productDiscounts })

    return (
      <>
        <Head>
          <title>H and B</title>
          <meta name="description" content="" />
        </Head>
        <SWRConfig value={{ fetcher: (resource, init) => fetch(resource, init).then(res => res.json()) }}>
          <ProductDiscountsContext.Provider value={productDiscounts}>
            <BasketProvider>
              <Header />
              <div className={styles.container}>
                <Component {...pageProps} />
              </div>
            </BasketProvider>
          </ProductDiscountsContext.Provider>
        </SWRConfig>
      </>
    )
  }
}

CustomApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext)
  const productDiscounts = await getProductDiscounts()

  return { ...appProps, productDiscounts }
}

export default CustomApp
