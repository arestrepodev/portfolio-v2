import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        backgroundColor="darkcyan"
        color="white"
        p={3}
        mb={6}
        align="center"
      >
        hello I'am a software frontend developer based in Colombia
      </Box>
      <Box as="section" display={{ md: 'flex' }}>
        <Box flexFlow={1}>
          <Heading as="h2" variant="page-title">
            Arnold Restrepo Hernandez
          </Heading>
          <p>Digital Craftzman (Musician / Developer)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
