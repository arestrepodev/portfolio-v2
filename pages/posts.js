import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '../components/layouts/article'
import { Section } from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/works/petgram-detail.jpeg'

const Pages = () => {
  const { t } = useTranslation()
  return (
    <Layout title="Posts">
      <Box>
        <Heading as="h1" fontSize={20} mb={4} mt={5}>
          Popular posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={(1, 2, 2)} gap={6}>
            <GridItem
              title="My Fish workflow"
              thumbnail={thumbFishWorkflow}
              href="https://www.youtube.com/watch?v=KKxhf50FIPI"
            />
            <GridItem
              title="My Fish workflow"
              thumbnail={thumbFishWorkflow}
              href="https://www.youtube.com/watch?v=KKxhf50FIPI"
            />
          </SimpleGrid>
        </Section>
        <Section delay={0.1}>
          <SimpleGrid columns={(1, 2, 2)} gap={6}>
            <GridItem
              title="My Fish workflow"
              thumbnail={thumbFishWorkflow}
              href="https://www.youtube.com/watch?v=KKxhf50FIPI"
            />
            <GridItem
              title="My Fish workflow"
              thumbnail={thumbFishWorkflow}
              href="https://www.youtube.com/watch?v=KKxhf50FIPI"
            />
          </SimpleGrid>
        </Section>
      </Box>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default Pages
