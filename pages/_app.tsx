import '../styles/globals.css';

import Layout from '../components/_common/layout';
import {  MantineProvider } from '@mantine/core';
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config'
import { HeaderResponsive } from '../components/_common/header';

const MyApp = ({ Component, pageProps }) => (
  <MantineProvider
  withGlobalStyles
  withNormalizeCSS
  theme={{
    /** Put your mantine theme override here */
    colorScheme: 'light',
  }}
>
  <Layout>
    <HeaderResponsive links={[{ link: 'home', label: 'home' },{ link: 'about', label: 'about' },{ link: 'pictures', label: 'pictures' },{ link: 'contact', label: 'contact' }]}/>
    <Component {...pageProps} />
  </Layout>
  </MantineProvider>
);


export default appWithTranslation(MyApp, nextI18NextConfig); 
