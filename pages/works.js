import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { SimpleGrid, Divider, Container, Heading, Box } from '@chakra-ui/react'
import { Section } from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import petgram from '../public/images/works/petgram.jpeg'
import servientregaInternational from '../public/images/works/servientrega-international-portafolio.jpeg'
const Works = () => {
  return (
    <Container maxW="container.xl">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
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
            Rediseñar la UX y mejorar la Arquitectura de Información fueron los
            objetivos para mejorar la web de Servientrega.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default Works
