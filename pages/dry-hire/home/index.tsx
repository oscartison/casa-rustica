import Seo from '../../../components/_common/seo';
import {
  GetInTouch,
  Hero,
  InfoSection,
  Partners,
} from '../../../components/dry-hire/home';
import config from '../../../config';

const { SERVER_ORIGIN } = config;

export default function Home({ partners, randomProduct }) {
  return (
    <>
      <Seo title="Home | Dry Hire" />
      <Hero randomProduct={randomProduct} />
      <InfoSection />
      <Partners partners={partners} />
      <GetInTouch />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const partners = await (await fetch(`${SERVER_ORIGIN}/api/partners`)).json();

  const randomProduct = await (
    await fetch(`${SERVER_ORIGIN}/api/randomImages/products/${query.imageId}`)
  ).json();

  return { props: { partners, randomProduct } };
}
