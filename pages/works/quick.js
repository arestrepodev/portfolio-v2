import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
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
          Quick <Badge>2019</Badge>
        </Title>
        <P>{t('quick.copy')}</P>
        <P>{t('quick.description')}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Link</Meta>
            <Link href="https://go.quick.com.co/" isExternal>
              https://go.quick.com.co/
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React.js, Redux, Storybook</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/quick-detail.png"
          alt="Quick Detail One"
        />
        <SimpleGrid columns={{ md: 2, sm: 1 }} gap={{ md: 3, sm: 1 }}>
          <WorkImage
            src="/images/works/quick-detail-2.png"
            alt="Quick Detail Two"
          />
          <WorkImage
            src="/images/works/quick-detail-3.png"
            alt="Quick Detail Three"
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
