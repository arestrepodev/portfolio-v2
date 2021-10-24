import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
  Container,
  Box,
  Heading,
  Image,
  Text,
  Link,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/Section'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  const { t } = useTranslation()
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
        {t('common.intro')}
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
          About me
        </Heading>
        <Paragraph indent={true}>
          I'm a <strong>frontend developer</strong>,{' '}
          <strong>multimedia producer</strong> and <strong>musician</strong>.
          I've a 4 years old experience in diferents fields from web development
          and technologies like: HTML5, CSS3, JavaScript, ECMAScript, React.js,
          Next.js and a11y.
        </Paragraph>
        <Paragraph>
          I'm a passionate about technology and the power it has over people,
          for this reason, I think in the continuous learning as philosophy, the
          creation of exclusive experiences to the users and the world
          transformation through technology.
        </Paragraph>
        <Paragraph>
          Currently I'm working as a Frontend Developer at{' '}
          <Link
            href="https://addi.com"
            color={useColorModeValue('blue.500', 'blue.100')}
          >
            Addi
          </Link>{' '}
          with thechnologias like React, Next.js and React Native.
        </Paragraph>
        <Box align="left" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />}>My portfolio</Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
      </Section>
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer']))
  }
})

export default Page
