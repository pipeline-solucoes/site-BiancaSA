import * as React from 'react';
import { AppProps } from 'next/app';
import '@fontsource/inter'; // Fonte "Inter"
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    // Remove o CSS injetado pelo servidor, se existir
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>            
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;