import * as React from 'react';
import Image from 'next/image';
import { Trans, useTranslation } from 'next-i18next';
import styled from 'styled-components';

import Front from '../../app/images/house/2.webp';
import ReadingCorner from '../../app/images/house/7.webp';
import { colors, fonts, mediaQueries, radius, shadows } from '../../styles/theme';
import Reveal from '../_common/reveal';
import { Container, Eyebrow, Heading, Lead, Section, TextLink } from '../_common/ui';

const Grid = styled.div`
  display: grid;
  gap: 3.5rem;
  align-items: center;

  ${mediaQueries.large`
    grid-template-columns: 1fr 1.05fr;
    gap: 5rem;
  `}
`;

const Collage = styled.div`
  position: relative;
  padding-bottom: 18%;
  padding-right: 12%;
`;

const MainPhoto = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: ${radius.lg};
  overflow: hidden;
  box-shadow: ${shadows.lifted};
`;

const SecondPhoto = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 46%;
  aspect-ratio: 3 / 4;
  border-radius: ${radius.md};
  overflow: hidden;
  border: 6px solid ${colors.cream};
  box-shadow: ${shadows.soft};
`;

const Badge = styled.div`
  position: absolute;
  left: -0.5rem;
  bottom: 8%;
  background: ${colors.olive};
  color: ${colors.cream};
  border-radius: ${radius.md};
  padding: 1rem 1.25rem;
  box-shadow: ${shadows.soft};
  max-width: 11rem;

  strong {
    display: block;
    font-family: ${fonts.serif};
    font-size: 2rem;
    font-weight: 400;
    line-height: 1;
  }

  span {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.8rem;
    line-height: 1.35;
    opacity: 0.85;
  }

  ${mediaQueries.medium`
    left: -1.5rem;
  `}
`;

const Signature = styled.p`
  margin-top: 2rem;
  font-family: ${fonts.serif};
  font-style: italic;
  font-size: 1.25rem;
  color: ${colors.olive};
`;

const About = () => {
  const { t } = useTranslation('home');

  return (
    <Section>
      <Container>
        <Grid>
          <Reveal>
            <Eyebrow>{t('aboutEyebrow')}</Eyebrow>
            <Heading>
              <Trans t={t} i18nKey="about" components={{ em: <em /> }} />
            </Heading>
            <Lead>{t('aboutDescription')}</Lead>
            <Lead>{t('aboutDescription2')}</Lead>
            <Signature>{t('aboutSignature')}</Signature>
            <div style={{ marginTop: '2rem' }}>
              <TextLink href="/pictures">{t('aboutLink')} →</TextLink>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <Collage>
              <MainPhoto>
                <Image
                  src={Front}
                  alt={t('houseAlt')}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1100px) 560px, 90vw"
                  style={{ objectFit: 'cover' }}
                />
              </MainPhoto>
              <SecondPhoto>
                <Image
                  src={ReadingCorner}
                  alt={t('readingCornerAlt')}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1100px) 260px, 45vw"
                  style={{ objectFit: 'cover' }}
                />
              </SecondPhoto>
              <Badge>
                <strong>{t('badgeValue')}</strong>
                <span>{t('badgeLabel')}</span>
              </Badge>
            </Collage>
          </Reveal>
        </Grid>
      </Container>
    </Section>
  );
};

export default About;
