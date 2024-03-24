import "../styles/globals.css";

import Layout from "../components/_common/layout";
import { MantineProvider } from "@mantine/core";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";


const MyApp = ({ Component, pageProps }) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      colorScheme: "light"
    }}
  >

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </MantineProvider>
);

export default appWithTranslation(MyApp, nextI18NextConfig);
