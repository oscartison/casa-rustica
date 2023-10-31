import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
};

const Seo = ({ title, description, keywords }: Props) => {
  return (
    <Head>
      <title>{title ?? 'Casa Rustica'}</title>
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
      <meta name="description" content={description ?? 'Casa Rustica'} />
      <meta
        name="keywords"
        content={
          keywords ??
          'Casa, Rustica, huis, vakantie, De Haan, Le Coq, Location, huren, villa, beach, strand, zee, goedkoop, interessant, family, familie, location, huren '
        }
      />
    </Head>
  );
};

export default Seo;
