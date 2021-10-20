import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Layout = ({ router }) => {
  return (
    <Container>
      <Box as="section" display={{ md: 'flex' }}>
        <Box
          height="100vh"
          alignItems="center"
          justifyContent="center"
          align="center"
        >
          <p>404 | Page not found</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Layout
