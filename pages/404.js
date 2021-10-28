import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Text,
  Divider,
  Button
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const NotFound = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Heading as="h1" align="center" mt={10}>
        {t('404.title')}
      </Heading>
      <Text align="center">{t('404.message')}</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal" size="lg">
            {t('404.button')}
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default NotFound
