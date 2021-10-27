import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { SimpleGrid, Divider, Container, Heading, Box } from '@chakra-ui/react'
import { Section } from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
// Note: Import Portfolio images here
import petgram from '../public/images/works/petgram.jpeg'
import servientregaInternational from '../public/images/works/servientrega-international-portafolio.jpeg'
const Works = () => {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <Box mb={6}>
          <p>
            A litle compilation of some importants, challenging, personals and
            professionals works, which I've made in my career.
          </p>
        </Box>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id={1} title="Petgram - PetLife" thumbnail={petgram}>
              La red social favorita de nuestras mascotas. Hecha con React.js y
              GraphQL.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id={1}
              title="Servientrega International"
              thumbnail={servientregaInternational}
            >
              Rediseñar la UX y mejorar la Arquitectura de Información fueron
              los objetivos al hacer este proyecto.
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
