import GlobalStyle from '@src/styles/global';
import '@src/styles/globals.css';
import type { AppProps } from 'next/app';
const { config } = require('@fortawesome/fontawesome-svg-core');
// import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons';
// library.add(
//   faBars,
//   faLinkedinIn,
//   faGithub,
//   faEnvelope,
//   faFile
// );

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>

  )
};
