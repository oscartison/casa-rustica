import Head from 'next/head';
import { useRouter } from 'next/router';

import HouseImage from '../../app/images/house/1.webp';

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
};

const Seo = ({ title, description, keywords }: Props) => {
  const { locale } = useRouter();
  const pageTitle = title ?? 'Casa Rustica';
  const pageDescription =
    description ?? 'Casa Rustica – a warm, characterful family home for up to 10 guests in De Haan, on the Belgian coast.';

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#FBF7F1" />
      <meta name="description" content={pageDescription} />
      <meta
        name="keywords"
        content={
          keywords ??
          'Casa Rustica, De Haan, Le Coq, vakantiehuis, maison de vacances, holiday home, Belgian coast, kust, côte belge, huren, location, rent, villa, strand, plage, beach, family, familie, famille, honden, chiens, dogs'
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Casa Rustica" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={`https://casarustica.be${HouseImage.src}`} />
      <meta property="og:locale" content={locale === 'nl' ? 'nl_BE' : locale === 'fr' ? 'fr_BE' : 'en_GB'} />
    </Head>
  );
};

export default Seo;
