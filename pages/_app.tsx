import '../styles/globals.css';

import Layout from '../components/_common/layout';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
