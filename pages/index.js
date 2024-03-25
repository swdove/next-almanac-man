import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Almanac Man</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Almanac Man" />
        <p className="description">
          <a href="/shows">Shows</a>
        </p>
        <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
        
      </main>

      <Footer />
    </div>
  )
}
