import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Trans, useTranslation } from 'next-i18next';
import styled from 'styled-components';

import Living from '../../app/images/house/6.webp';
import Kitchen from '../../app/images/house/8.webp';
import Bedroom from '../../app/images/house/11.webp';
import Garden from '../../app/images/house/8b.webp';
import { colors, fonts, mediaQueries, radius, shadows } from '../../styles/theme';
import Reveal from '../_common/reveal';
import { Container, Eyebrow, Heading, Lead, Section } from '../_common/ui';

const spaces: { key: string; image: StaticImageData }[] = [
  { key: 'living', image: Living },
  { key: 'kitchen', image: Kitchen },
  { key: 'bedrooms', image: Bedroom },
  { key: 'garden', image: Garden },
];

const Intro = styled.div`
  max-width: 40rem;
  margin: 0 auto 3.5rem;
  text-align: center;

  ${mediaQueries.medium`
    margin-bottom: 5rem;
  `}
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${mediaQueries.medium`
    gap: 6rem;
  `}
`;

const Row = styled.article<{ $reverse: boolean }>`
  display: grid;
  gap: 1.75rem;
  align-items: center;

  ${mediaQueries.medium`
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
  `}

  ${(props) =>
    props.$reverse &&
    mediaQueries.medium`
      grid-template-columns: 1fr 1.2fr;
      > :first-child { order: 2; }
    `}
`;

const Photo = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: ${radius.lg};
  overflow: hidden;
  box-shadow: ${shadows.soft};

  img {
    object-fit: cover;
    transition: transform 1.2s cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

const Number = styled.span`
  font-family: ${fonts.serif};
  font-style: italic;
  font-size: 1.1rem;
  color: ${colors.clay};
`;

const Title = styled.h3`
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: clamp(1.75rem, 3.5vw, 2.4rem);
  line-height: 1.15;
  margin-top: 0.5rem;
`;

const Text = styled.p`
  margin-top: 1rem;
  line-height: 1.8;
  color: ${colors.textSoft};
  font-size: 1.05rem;
`;

const Spaces = () => {
  const { t } = useTranslation('home');

  return (
    <Section $tone="sand">
      <Container>
        <Intro>
          <Reveal>
            <Eyebrow>{t('spacesEyebrow')}</Eyebrow>
            <Heading $center>
              <Trans t={t} i18nKey="spacesTitle" components={{ em: <em /> }} />
            </Heading>
            <Lead $center>{t('spacesDescription')}</Lead>
          </Reveal>
        </Intro>

        <Rows>
          {spaces.map((space, index) => (
            <Row key={space.key} $reverse={index % 2 === 1}>
              <Reveal>
                <Photo>
                  <Image
                    src={space.image}
                    alt={t(`${space.key}Title`)}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 55vw, 100vw"
                  />
                </Photo>
              </Reveal>
              <Reveal delay={120}>
                <Number>0{index + 1}</Number>
                <Title>{t(`${space.key}Title`)}</Title>
                <Text>{t(`${space.key}Description`)}</Text>
              </Reveal>
            </Row>
          ))}
        </Rows>
      </Container>
    </Section>
  );
};

export default Spaces;
