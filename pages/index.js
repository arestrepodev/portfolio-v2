import {
  Container,
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/Section'

const Page = () => {
  return (
    <Container maxW="container.xl">
      <Box
        borderRadius="lg"
        bg={useColorModeValue('darkcyan', 'whiteAlpha.200')}
        color="white"
        p={3}
        mb={6}
        mt={6}
        align="center"
      >
        Hello I'am a software frontend developer based in Colombia
      </Box>
      <Box
        as="section"
        display={{ md: 'flex' }}
        justifyContent={{ md: 'space-between' }}
        alignItems="center"
      >
        <Box flexFlow={1} textAlign={{ xs: 'center' }}>
          <Heading as="h2" variant="page-title">
            Arnold Restrepo Hernandez
          </Heading>
          <Text as="p" fontSize="sm">
            Frontend Developer / Musician
          </Text>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.500"
            borderWidth={3}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile-arnold-restrepo.jpeg"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <p>Paragraph</p>
      </Section>
    </Container>
  )
}

export default Page
