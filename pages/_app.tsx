import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = {
  primary: 'green',
}

export default function App({ Component, pageProps}: AppProps):  JSX.Element{

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
      }, []);

    return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }