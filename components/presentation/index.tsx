import * as React from 'react';
import { Trans, useTranslation } from 'next-i18next';
import {
  IconBeach,
  IconCertificate,
  IconHeartHandshake,
  IconPaw,
  IconToolsKitchen2,
  IconTrees,
  IconWifi,
  IconBike,
} from '@tabler/icons-react';
import styled from 'styled-components';

import { colors, fonts, mediaQueries, radius } from '../../styles/theme';
import Reveal from '../_common/reveal';
import { Container, Eyebrow, Heading, Section } from '../_common/ui';

const highlights = [
  { key: 'beach', icon: IconBeach },
  { key: 'outdoor', icon: IconTrees },
  { key: 'family', icon: IconHeartHandshake },
  { key: 'pets', icon: IconPaw },
  { key: 'kitchenEquipped', icon: IconToolsKitchen2 },
  { key: 'wifi', icon: IconWifi },
  { key: 'surroundings', icon: IconBike },
  { key: 'tourism', icon: IconCertificate },
];

const Header = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 3rem;

  ${mediaQueries.large`
    grid-template-columns: 1fr 1fr;
    align-items: end;
    gap: 4rem;
    margin-bottom: 4rem;
  `}

  p {
    color: rgba(251, 247, 241, 0.75);
    line-height: 1.75;
    font-size: 1.05rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background: rgba(251, 247, 241, 0.14);
  border: 1px solid rgba(251, 247, 241, 0.14);
  border-radius: ${radius.lg};
  overflow: hidden;

  ${mediaQueries.small`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${mediaQueries.large`
    grid-template-columns: repeat(4, 1fr);
  `}
`;

const Card = styled.div`
  height: 100%;
  background: ${colors.olive};
  padding: 1.25rem;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1rem;
  transition: background-color 0.3s ease;

  svg {
    grid-row: span 2;
  }

  ${mediaQueries.small`
    display: block;
    padding: 1.75rem 1.5rem;
  `}

  &:hover {
    background: #465140;
  }

  svg {
    color: ${colors.linen};
  }

  h3 {
    font-family: ${fonts.serif};
    font-weight: 400;
    font-size: 1.25rem;
    color: ${colors.cream};

    ${mediaQueries.small`
      font-size: 1.35rem;
      margin-top: 1.1rem;
    `}
  }

  p {
    margin-top: 0.35rem;
    font-size: 0.95rem;
    line-height: 1.65;
    color: rgba(251, 247, 241, 0.72);
  }
`;

const FeaturesCards = () => {
  const { t } = useTranslation('home');

  return (
    <Section $tone="olive">
      <Container>
        <Header>
          <Reveal>
            <Eyebrow $light>{t('highlightsEyebrow')}</Eyebrow>
            <Heading $light>
              <Trans t={t} i18nKey="highlightsTitle" components={{ em: <em /> }} />
            </Heading>
          </Reveal>
          <Reveal delay={100}>
            <p>{t('highlightsDescription')}</p>
          </Reveal>
        </Header>

        <Reveal>
          <Grid>
            {highlights.map((item) => (
              <Card key={item.key}>
                <item.icon size={30} stroke={1.3} />
                <h3>{t(item.key)}</h3>
                <p>{t(`${item.key}Description`)}</p>
              </Card>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Section>
  );
};

export default FeaturesCards;
