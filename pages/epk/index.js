import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Epk() {
  return (
    <div className="container">
      <Head>
        <title>Almanac Man</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="EPK" />
        <p className="description">
            Epk goes here.
        </p>
      </main>

      <Footer />
    </div>
  )
}
