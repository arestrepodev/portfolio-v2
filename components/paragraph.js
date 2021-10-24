import styled from '@emotion/styled'

const Paragraph = styled('p')`
  text-align: justify;
  text-indent: ${props => (props.indent ? '0.5rem' : '0')};
  margin-bottom: 0.5rem;
`

export default Paragraph
