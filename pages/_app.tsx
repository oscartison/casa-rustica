import "../styles/globals.css";

import Layout from "../components/_common/layout";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { appWithTranslation } from "next-i18next";
import { DM_Sans, Fraunces } from "next/font/google";
import nextI18NextConfig from "../next-i18next.config";

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap"
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap"
});

const theme: MantineThemeOverride = {
  colors: {
    clay: [
      "#FBF1EB",
      "#F3DCCD",
      "#E8C0A6",
      "#DCA27E",
      "#CF8459",
      "#C2723F",
      "#B4643C",
      "#94502E",
      "#743E24",
      "#552D1A"
    ]
  },
  primaryColor: "clay",
  primaryShade: 6,
  fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  headings: {
    fontFamily: "var(--font-serif), Georgia, serif",
    fontWeight: 500
  },
  defaultRadius: "md",
  black: "#2F2A25"
};

const MyApp = ({ Component, pageProps }) => (
  <>
    {/* Exposed on :root so portals (modals, menus) get the fonts too */}
    <style jsx global>{`
      :root {
        --font-serif: ${serif.style.fontFamily};
        --font-sans: ${sans.style.fontFamily};
      }
    `}</style>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  </>
);

export default appWithTranslation(MyApp, nextI18NextConfig);
