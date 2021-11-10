import { Box } from '@chakra-ui/react'

const Footer = () => (
  <Box align="center" opacity={0.7} fontSize="sm">
    &copy; {new Date().getFullYear()} Arnold Restrepo Hernandez. All Rights
    Reserved.
  </Box>
)

export default Footer
