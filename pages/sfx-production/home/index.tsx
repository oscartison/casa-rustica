import Seo from '../../../components/_common/seo';
import {
  GetAQuote,
  Hero,
  MainSection,
} from '../../../components/sfx-production/home';
import config from '../../../config';

const { SERVER_ORIGIN } = config;

export default function Home({ randomEvent }) {
  return (
    <>
      <Seo title="Home | SFX Production" />
      <Hero randomEvent={randomEvent} />
      <MainSection />
      <GetAQuote />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const randomEvent = await (
    await fetch(`${SERVER_ORIGIN}/api/randomImages/events/${query.imageId}`)
  ).json();

  return { props: { randomEvent } };
}
