import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Bao's homepage" />
        <meta name="author" content="Bao Nguyen" />
        <meta name="author" content="baontq" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Bao Nguyen" />
        <meta name="og:title" content="Bao Nguyen" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://baontq.dev/card.png" />
        <title>Bao Nguyen - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={20}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
