import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { SimpleGrid, Container, Heading, Box } from '@chakra-ui/react'
import { Section } from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
// Note: Import Portfolio images here
import petgram from '../public/images/works/petgram.jpeg'
import servientregaInternational from '../public/images/works/servientrega-international-portafolio.jpeg'
const Works = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Container maxW="container.xl">
        <Heading as="h3" fontSize={20} mb={4}>
          {t('works.title')}
        </Heading>
        <Box mb={6}>
          <p>{t('works.description')}</p>
        </Box>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id={1}
              title={t('works.petgram.title')}
              thumbnail={petgram}
            >
              {t('works.petgram.copy')}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id={1}
              title={t('works.servientrega.title')}
              thumbnail={servientregaInternational}
            >
              {t('works.servientrega.copy')}
            </WorkGridItem>
          </Section>
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

export default Works
