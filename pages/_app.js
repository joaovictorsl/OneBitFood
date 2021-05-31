import Head from 'next/head';
import '../styles/globals.scss';
import { Header } from '../components/Header';
import Container from 'react-bootstrap/Container'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OneBitFoodV2</title>
        <link ref='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <Container className='mt-5'>
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  )
}

export default MyApp
