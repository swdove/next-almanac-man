import type { AppProps } from 'next/app'
import React from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  // weight: '400',
  display: 'swap',
  variable: '--font-montserrat'
})
 
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}