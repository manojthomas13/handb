import Head from 'next/head'

import '../styles/globals.css'
import styles from '../styles/Main.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>H and B</title>
        <meta name="description" content="" />
      </Head>

      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
