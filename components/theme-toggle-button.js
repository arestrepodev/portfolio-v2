import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const colorMode = useColorModeValue('purple', 'orange')

  return (
    <IconButton
      aria-label="Toggle Theme"
      colorScheme={colorMode}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    />
  )
}

export default ThemeToggleButton
