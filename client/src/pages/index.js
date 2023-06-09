import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomeMain from './home/home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to E-Store</title>
        <meta name="E-commerce Project" content="This is build with the out standing technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ficon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <HomeMain />
      </main>
    </>
  )
}
