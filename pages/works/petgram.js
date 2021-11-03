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
          Petgram <Badge>2017</Badge>
        </Title>
        <P>Petgram is a social network for pets. It is a clone of Instagram</P>
        <P>
          Aplicación para ver las mejores fotos de mascotas. Hecha en React.js y
          GraphQL. El deploy se realizó en Zeit con now.js, usando los nuevos
          conceptos de HOOKS, construí funciones para reutilizar características
          como: Local Storage, Mutaciones en GrapQL, Lazy Loading - Scroll,
          entre otras, además de soporte offline.
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
