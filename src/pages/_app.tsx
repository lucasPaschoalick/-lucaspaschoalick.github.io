import GlobalStyle from '@src/styles/global';
import '@src/styles/globals.css';
import type { AppProps } from 'next/app';

const { config } = require('@fortawesome/fontawesome-svg-core');
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>

  )
};
