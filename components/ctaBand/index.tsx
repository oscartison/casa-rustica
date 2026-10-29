import * as React from 'react';
import Image from 'next/image';
import { Trans, useTranslation } from 'next-i18next';
import { IconArrowRight } from '@tabler/icons-react';
import styled from 'styled-components';

import Living from '../../app/images/house/4.webp';
import { colors, fonts, mediaQueries } from '../../styles/theme';
import Reveal from '../_common/reveal';
import { ButtonLink, Container, Eyebrow } from '../_common/ui';

const Band = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  color: ${colors.cream};
  padding: 6rem 0;
  text-align: center;

  ${mediaQueries.medium`
    padding: 9rem 0;
  `}
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;

  img {
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(44, 51, 39, 0.72), rgba(32, 26, 20, 0.78));
  }
`;

const Title = styled.h2`
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: clamp(2.2rem, 6vw, 4rem);
  line-height: 1.08;
  max-width: 18ch;
  margin: 1.25rem auto 0;

  em {
    font-style: italic;
    color: ${colors.linen};
  }
`;

const Note = styled.p`
  margin: 1.5rem auto 0;
  max-width: 32rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(251, 247, 241, 0.85);
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.85rem;
  margin-top: 2.5rem;
`;

const CtaBand = () => {
  const { t } = useTranslation('home');

  return (
    <Band>
      <Background>
        <Image src={Living} alt="" fill placeholder="blur" sizes="100vw" />
      </Background>
      <Container $narrow>
        <Reveal>
          <Eyebrow $light>{t('ctaEyebrow')}</Eyebrow>
          <Title>
            <Trans t={t} i18nKey="ctaTitle" components={{ em: <em /> }} />
          </Title>
          <Note>{t('ctaNote')}</Note>
          <Buttons>
            <ButtonLink href="/prices">
              {t('checkAvailability')} <IconArrowRight size={18} />
            </ButtonLink>
            <ButtonLink href="/contact" $variant="light">
              {t('askQuestion')}
            </ButtonLink>
          </Buttons>
        </Reveal>
      </Container>
    </Band>
  );
};

export default CtaBand;
