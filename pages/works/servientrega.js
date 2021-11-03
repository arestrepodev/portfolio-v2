import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const work = () => {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Title>
          Servientrega <Badge>2017</Badge>
        </Title>
        <P>
          Rediseñar la Experiencia de Usuario y mejorar la Arquitectura de
          Información fueron los objetivos principales para mejorar la web de
          Servientrega International. Rediseñe la interfaz, buscando que fuera
          de un contraste limpio con la información para que los usuarios puedan
          consumir mejor el contenido del sitio.
        </P>
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
        </List>
        <WorkImage src="/images/works/inkdrop_01.png" alt="Petgram" />
      </Container>
    </Layout>
  )
}

export default work
