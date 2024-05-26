import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { AccountProvider } from 'src/hooks/useAccount';
import GlobalStyles from 'src/styles/global';
import { defaultTheme } from 'src/styles/theme';

import StyledComponentsRegistry from './_registry';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AccountProvider>
      <StyledComponentsRegistry>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledComponentsRegistry>
    </AccountProvider>
  );
}

export default MyApp;
