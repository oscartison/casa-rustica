import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trans, useTranslation } from 'next-i18next';
import styled from 'styled-components';

import Twin from '../../app/images/house/17.webp';
import Dining from '../../app/images/house/5.webp';
import Lounge from '../../app/images/house/3.webp';
import Bathroom from '../../app/images/house/19.webp';
import Bedroom from '../../app/images/house/14.webp';
import { mediaQueries, radius } from '../../styles/theme';
import Reveal from '../_common/reveal';
import { ButtonLink, Container, Eyebrow, Heading, Section } from '../_common/ui';

const photos = [
  { image: Dining, alt: 'diningAlt' },
  { image: Lounge, alt: 'loungeAlt' },
  { image: Bedroom, alt: 'bedroomAlt' },
  { image: Twin, alt: 'twinAlt' },
  { image: Bathroom, alt: 'bathroomAlt' },
];

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  ${mediaQueries.medium`
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 3.5rem;
  `}
`;

const Mosaic = styled(Link)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 9rem;
  gap: 0.6rem;

  > div:first-child {
    grid-column: span 2;
    grid-row: span 2;
  }

  ${mediaQueries.medium`
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 14rem;
    gap: 0.9rem;
  `}
`;

const Tile = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${radius.md};

  img {
    object-fit: cover;
    transition: transform 1s cubic-bezier(0.2, 0.7, 0.2, 1), filter 0.4s ease;
  }

  &:hover img {
    transform: scale(1.06);
    filter: brightness(1.05);
  }
`;

const GalleryTeaser = () => {
  const { t } = useTranslation('home');

  return (
    <Section>
      <Container>
        <Header>
          <Reveal>
            <Eyebrow>{t('galleryEyebrow')}</Eyebrow>
            <Heading>
              <Trans t={t} i18nKey="galleryTitle" components={{ em: <em /> }} />
            </Heading>
          </Reveal>
          <Reveal delay={100}>
            <ButtonLink href="/pictures" $variant="outline">
              {t('galleryButton')}
            </ButtonLink>
          </Reveal>
        </Header>

        <Reveal>
          <Mosaic href="/pictures" aria-label={t('galleryButton')}>
            {photos.map((photo, index) => (
              <Tile key={photo.alt}>
                <Image
                  src={photo.image}
                  alt={t(photo.alt)}
                  fill
                  placeholder="blur"
                  sizes={index === 0 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                />
              </Tile>
            ))}
          </Mosaic>
        </Reveal>
      </Container>
    </Section>
  );
};

export default GalleryTeaser;
