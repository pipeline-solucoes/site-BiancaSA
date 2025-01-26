import * as React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { AppProps } from 'next/app';
import {themePS} from '../theme';

// Crie uma instância de cache para o Emotion
const cache = createCache({ key: 'css', prepend: true });

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove o CSS injetado pelo servidor, se existir
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={themePS}>
        <StyledThemeProvider theme={themePS}>
          <CssBaseline />
          <Component {...pageProps} />
        </StyledThemeProvider>
      </MuiThemeProvider>
    </CacheProvider>
  );
}
