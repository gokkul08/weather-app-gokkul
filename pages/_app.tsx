/**
 * This page loads the common styles and styles for all the pages.
 * It also loads the Navigation bar that will appear on all pages
 */

import React from 'react';
import type { AppProps } from 'next/app';
import { StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavigationBar from '../components/NavigationBar';

export default function App({ Component, pageProps}: AppProps):  JSX.Element{

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
      }, []);

    return (
        <StylesProvider injectFirst>
          <CssBaseline />
          <NavigationBar />
          <Component {...pageProps} />
        </StylesProvider>
    )
  }