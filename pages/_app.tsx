import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#fffffb',
        main: '#d7ccc8',
        dark: '#a69b97',
        contrastText: '#000000',
      },
      secondary: {
        light: '#efdcd5',
        main: '#bcaaa4',
        dark: '#8c7b75',
        contrastText: '#000000',
      },
    },
    typography: {
      fontFamily: ['BIZ UDPGothic','Hiragino Sans','sans-serif'].join(','),
    }
  });
  return (
    <>
      <Head>
        <title>Rice Cake Software Portfolio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
