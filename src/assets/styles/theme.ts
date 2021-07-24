import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    heading: 'Poppins',
    body: 'Archivo'
  },
  breakpoints: {
    sm: null,
    md: '750px',
    lg: null,
    xl: null
  },
  styles: {
    global: {
      body: {
        bg: 'green.50'
      }
    }
  }
});

export default theme;
