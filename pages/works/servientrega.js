import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const work = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Container maxW="container.xl">
        <Title>
          Servientrega <Badge>2017</Badge>
        </Title>
        <P>{t('servientrega.copy')}</P>
        <P>{t('servientrega.description')}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Link</Meta>
            <Link href="https://servientrega.us/" isExternal>
              https://servientrega.us/
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>WordPress, React.js, Graph.ql</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/servientrega-detail.jpeg"
          alt="Servientrega International details"
        />
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
