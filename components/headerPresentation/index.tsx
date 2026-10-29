import * as React from 'react';
import Image from 'next/image';
import { Trans, useTranslation } from 'next-i18next';
import { IconArrowRight, IconBath, IconBed, IconPaw, IconUsers } from '@tabler/icons-react';
import styled, { keyframes } from 'styled-components';

import Home from '../../app/images/house/1.webp';
import { colors, fonts, mediaQueries } from '../../styles/theme';
import { ButtonLink, Container, Eyebrow } from '../_common/ui';

const rise = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: none; }
`;

const slowZoom = keyframes`
  from { transform: scale(1.08); }
  to { transform: scale(1); }
`;

const Hero = styled.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${colors.cream};
  overflow: hidden;
  isolation: isolate;
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;

  img {
    object-fit: cover;
    object-position: center 65%;
    animation: ${slowZoom} 14s ease-out both;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(32, 26, 20, 0.55) 0%, rgba(32, 26, 20, 0.15) 55%, rgba(32, 26, 20, 0) 100%),
      linear-gradient(
        to top,
        rgba(32, 26, 20, 0.85) 0%,
        rgba(32, 26, 20, 0.45) 40%,
        rgba(32, 26, 20, 0.15) 70%,
        rgba(32, 26, 20, 0.4) 100%
      );
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      animation: none;
    }
  }
`;

const Content = styled.div`
  padding: 8rem 0 2.5rem;

  > * {
    animation: ${rise} 1s cubic-bezier(0.2, 0.7, 0.2, 1) both;
  }
  > *:nth-child(2) {
    animation-delay: 0.12s;
  }
  > *:nth-child(3) {
    animation-delay: 0.24s;
  }
  > *:nth-child(4) {
    animation-delay: 0.36s;
  }

  ${mediaQueries.medium`
    padding-bottom: 3.5rem;
  `}
`;

const Title = styled.h1`
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: clamp(2.75rem, 8vw, 5.75rem);
  line-height: 1;
  letter-spacing: -0.02em;
  margin-top: 1.25rem;
  max-width: 14ch;

  em {
    font-style: italic;
    color: ${colors.linen};
  }
`;

const Subtitle = styled.p`
  margin-top: 1.5rem;
  max-width: 34rem;
  font-size: 1.1rem;
  line-height: 1.65;
  color: rgba(251, 247, 241, 0.88);

  ${mediaQueries.medium`
    font-size: 1.25rem;
  `}
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2.25rem;

  a {
    flex: 1 1 auto;
  }

  ${mediaQueries.small`
    a {
      flex: 0 0 auto;
    }
  `}
`;

const Facts = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid rgba(251, 247, 241, 0.25);
  background: rgba(32, 26, 20, 0.25);
  backdrop-filter: blur(6px);

  ${mediaQueries.medium`
    grid-template-columns: repeat(4, 1fr);
  `}

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.1rem 1.25rem;
    font-size: 0.92rem;
    line-height: 1.3;
  }

  li:nth-child(odd) {
    border-right: 1px solid rgba(251, 247, 241, 0.15);
  }

  li:nth-child(-n + 2) {
    border-bottom: 1px solid rgba(251, 247, 241, 0.15);
  }

  ${mediaQueries.medium`
    li {
      justify-content: center;
      padding: 1.5rem 1rem;
      font-size: 1rem;
    }
    li:nth-child(-n + 2) {
      border-bottom: 0;
    }
    li:not(:last-child) {
      border-right: 1px solid rgba(251, 247, 241, 0.15);
    }
  `}

  strong {
    display: block;
    font-weight: 700;
  }

  span {
    opacity: 0.75;
    font-size: 0.85em;
  }

  svg {
    flex-shrink: 0;
    color: ${colors.linen};
  }
`;

const facts = [
  { icon: IconUsers, value: 'factGuests', detail: 'factGuestsDetail' },
  { icon: IconBed, value: 'factBedrooms', detail: 'factBedroomsDetail' },
  { icon: IconBath, value: 'factBathrooms', detail: 'factBathroomsDetail' },
  { icon: IconPaw, value: 'factPets', detail: 'factPetsDetail' },
];

const HeaderPresentation = () => {
  const { t } = useTranslation('home');

  return (
    <Hero>
      <Background>
        <Image src={Home} alt={t('heroAlt')} fill priority placeholder="blur" sizes="100vw" quality={80} />
      </Background>

      <Container>
        <Content>
          <Eyebrow $light>{t('heroEyebrow')}</Eyebrow>
          <Title>
            <Trans t={t} i18nKey="title" components={{ em: <em /> }} />
          </Title>
          <Subtitle>{t('description')}</Subtitle>
          <Buttons>
            <ButtonLink href="/prices">
              {t('checkAvailability')} <IconArrowRight size={18} />
            </ButtonLink>
            <ButtonLink href="/pictures" $variant="light">
              {t('goToPictures')}
            </ButtonLink>
          </Buttons>
        </Content>
      </Container>

      <Facts>
        {facts.map((fact) => (
          <li key={fact.value}>
            <fact.icon size={26} stroke={1.4} />
            <div>
              <strong>{t(fact.value)}</strong>
              <span>{t(fact.detail)}</span>
            </div>
          </li>
        ))}
      </Facts>
    </Hero>
  );
};

export default HeaderPresentation;
