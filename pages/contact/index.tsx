import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
import { Trans, useTranslation } from 'next-i18next';
import dynamic from "next/dynamic";
import { IconBeach, IconBuildingCastle, IconTrain } from '@tabler/icons-react';

import Seo from '../../components/_common/seo';
import { ContactUs } from '../../components/contact';
import Reveal from '../../components/_common/reveal';
import { Container, Eyebrow, Heading, Lead, PageIntro, Section } from '../../components/_common/ui';
import { colors, fonts, mediaQueries, radius, shadows } from '../../styles/theme';

const DynamicMap = dynamic(() => import("../../components/map/map"), {
  loading: () => null,
  ssr: false,
});

const FormSection = styled(Section)`
  padding-top: 0;
  background: linear-gradient(${colors.sand} 0, ${colors.sand} 6rem, ${colors.cream} 6rem);

  ${mediaQueries.medium`
    padding-top: 0;
  `}
`;

const LocationGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  align-items: center;

  ${mediaQueries.large`
    grid-template-columns: 1fr 1.3fr;
    gap: 4rem;
  `}
`;

const Nearby = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2rem;

  li {
    display: flex;
    gap: 1rem;
  }

  svg {
    flex-shrink: 0;
    color: ${colors.clay};
    margin-top: 0.15rem;
  }

  strong {
    display: block;
    font-family: ${fonts.serif};
    font-weight: 500;
    font-size: 1.15rem;
  }

  span {
    color: ${colors.textSoft};
    line-height: 1.6;
  }
`;

const MapCard = styled.div`
  position: relative;
  height: 22rem;
  border-radius: ${radius.lg};
  overflow: hidden;
  box-shadow: ${shadows.lifted};
  background: ${colors.linen};
  isolation: isolate;

  ${mediaQueries.medium`
    height: 30rem;
  `}

  .leaflet-tile-pane {
    filter: sepia(0.2) saturate(0.9);
  }
`;

const nearby = [
  { key: 'nearbyBeach', icon: IconBeach },
  { key: 'nearbyVillage', icon: IconBuildingCastle },
  { key: 'nearbyTram', icon: IconTrain },
];

const Contact = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <Seo title={t('contactSeoTitle')} description={t('contactSeoDescription')} />
      <PageIntro>
        <Container $narrow>
          <Eyebrow>{t('contactEyebrow')}</Eyebrow>
          <h1>
            <Trans t={t} i18nKey="contactTitle" components={{ em: <em /> }} />
          </h1>
          <Lead $center>{t('contactDescription')}</Lead>
        </Container>
      </PageIntro>

      <FormSection>
        <Container>
          <Reveal>
            <ContactUs />
          </Reveal>
        </Container>
      </FormSection>

      <Section $tone="sand">
        <Container>
          <LocationGrid>
            <Reveal>
              <Eyebrow>{t('locationEyebrow')}</Eyebrow>
              <Heading>
                <Trans t={t} i18nKey="locationTitle" components={{ em: <em /> }} />
              </Heading>
              <Lead>{t('locationDescription')}</Lead>
              <Nearby>
                {nearby.map((item) => (
                  <li key={item.key}>
                    <item.icon size={24} stroke={1.5} />
                    <div>
                      <strong>{t(item.key)}</strong>
                      <span>{t(`${item.key}Description`)}</span>
                    </div>
                  </li>
                ))}
              </Nearby>
            </Reveal>
            <Reveal delay={120}>
              <MapCard>
                <DynamicMap />
              </MapCard>
            </Reveal>
          </LocationGrid>
        </Container>
      </Section>
    </>
  );
};

export default Contact;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    }
  };
}
