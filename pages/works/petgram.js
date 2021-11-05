import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
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
      <Container maxW="container.xl">
        <Title>
          Petgram <Badge>2018</Badge>
        </Title>
        <P>{t('petgram.copy')}</P>
        <P>{t('petgram.description')}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Link</Meta>
            <Link href="https://petgram-ol261r64c.now.sh/" isExternal>
              https://petgram-ol261r64c.now.sh/
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React.js, Graph.ql, Styled Components, Now.js</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/ArnoldRestrepo/petgram" isExternal>
              https://github.com/ArnoldRestrepo/petgram
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/petgram-detail.jpeg" alt="Petgram" />
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
