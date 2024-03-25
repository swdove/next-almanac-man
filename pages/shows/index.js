import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Shows() {
  return (
    <div className="container">
      <Head>
        <title>Almanac Man</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Shows" />
        <p className="description">
            Shows goes here.
        </p>
      </main>

      <Footer />
    </div>
  )
}
