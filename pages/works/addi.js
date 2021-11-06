import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Image,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const work = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Container maxW="container.xl" pt={3}>
        <Title>
          ADDI Shop <Badge>2021</Badge>
        </Title>
        <P>{t('addi.copy')}</P>
        <P>{t('addi.description')}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Link</Meta>
            <Link href="https://co.addi.com/" isExternal>
              https://co.addi.com/
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              React Native, Styled Components, Storybook, Firebase y Java
            </span>
          </ListItem>
        </List>
        <Box
          align="left"
          mb={3}
          display={{ md: 'flex', sm: 'block' }}
          alignItems="center"
          flexDirection={{ md: 'row' }}
        >
          <Link
            href="https://apps.apple.com/co/app/addi-shop/id1580430202"
            isExternal
          >
            <Image
              src="/images/works/appstore.png"
              sizes="sm"
              width="135px"
              alt="Download Appstore"
              ml={2}
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.addimobile"
            isExternal
          >
            <Image
              src="/images/works/google-play-badge.png"
              width="170px"
              alt="Google Play"
            />
          </Link>
        </Box>

        <WorkImage
          src="/images/works/addi-thumbnail.png"
          alt="Addi Thumbnail"
        />
        <SimpleGrid columns={{ md: 3, sm: 2 }} gap={{ md: 3, sm: 2 }}>
          <WorkImage
            src="/images/works/addi-shop-detail-1.jpeg"
            alt="Addi Shop Banner 1"
          />
          <WorkImage
            src="/images/works/addi-shop-detail-2.jpeg"
            alt="Addi Shop Banner 2"
          />
          <WorkImage
            src="/images/works/addi-shop-detail-3.jpeg"
            alt="Addi Shop Banner 3"
          />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default work
