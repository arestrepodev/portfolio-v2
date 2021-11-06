import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { SimpleGrid, Container, Heading, Box, Divider } from '@chakra-ui/react'
import { Section } from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
// Note: Import Portfolio images here
import petgram from '../public/images/works/petgram.jpeg'
import servientrega from '../public/images/works/servientrega-international-portafolio.jpeg'
import quick from '../public/images/works/quick-thumbnail.jpeg'
import addi from '../public/images/works/addi-thumbnail.png'

const Works = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Container maxW="container.xl">
        <Heading as="h3" fontSize={20} mb={3} mt={6}>
          {t('works.title')}
        </Heading>
        <Divider mb={3} />
        <Box mb={6}>
          <p>{t('works.description')}</p>
        </Box>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="petgram"
              title={t('works.petgram.title')}
              thumbnail={petgram}
            >
              {t('works.petgram.copy')}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="servientrega"
              title={t('works.servientrega.title')}
              thumbnail={servientrega}
            >
              {t('works.servientrega.copy')}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Heading as="h3" fontSize={20} mb={3} mt={6}>
          {t('collaborations.title')}
        </Heading>
        <Divider mb={3} />
        <Box mb={6}>
          <p>{t('collaborations.description')}</p>
        </Box>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="quick"
              title={t('collaborations.quick.title')}
              thumbnail={quick}
            >
              {t('collaborations.quick.copy')}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="addi"
              title={t('collaborations.addi.title')}
              thumbnail={addi}
            >
              {t('collaborations.addi.copy')}
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
