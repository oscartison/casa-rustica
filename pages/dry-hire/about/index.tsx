import Seo from '../../../components/_common/seo';
import { Hero, Timeline } from '../../../components/about';
import config from '../../../config';
import { Variant } from '../../../styles/theme';

const { SERVER_ORIGIN } = config;

export default function About({ timelineItems }) {
  return (
    <>
      <Seo />
      <Hero variant={Variant.DRY_HIRE} />
      <Timeline timelineItems={timelineItems} />
    </>
  );
}

export async function getServerSideProps() {
  const timelineItems = await (
    await fetch(`${SERVER_ORIGIN}/api/timeline`)
  ).json();

  return { props: { timelineItems } };
}
