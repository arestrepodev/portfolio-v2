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
import { Section } from '../components/section'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
  const { t } = useTranslation()
  return (
    <Layout>
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
            {t('common.about-title')}
          </Heading>
          <Paragraph indent={true}>{t('about-me.intro')}</Paragraph>
          <Paragraph>{t('about-me.passionate')}</Paragraph>
          <Paragraph>{t('about-me.current-job')}</Paragraph>
          <Box align="left" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />}>
                {t('common.portfolio-button')}
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t('common.bio-title')}
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            {t('bio.born')}
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            {t('bio.career')}
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            {t('bio.ondigital-job')}
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            {t('bio.quick-job')}
          </BioSection>
          <BioSection>
            <BioYear>2021 {t('bio.current-title')}</BioYear>
            {t('bio.addi-job')}
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default Page
