import styled from 'styled-components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import Seo from '../components/_common/seo';
import Presentation from '../components/presentation';
import HeaderPresentation from '../components/headerPresentation';
import * as React from 'react'
import prisma from '../lib/prisma';
import { Visitor} from '@prisma/client';
import About from '../components/about';
import Spaces from '../components/spaces';
import GalleryTeaser from '../components/galleryTeaser';
import CtaBand from '../components/ctaBand';
import { ButtonLink } from '../components/_common/ui';
import { colors, mediaQueries } from '../styles/theme';

// Booking shortcut that stays in reach while scrolling on phones
const MobileBookingBar = styled.div<{ $visible: boolean }>`
  position: fixed;
  left: 0.75rem;
  right: 0.75rem;
  bottom: calc(0.75rem + env(safe-area-inset-bottom));
  z-index: 150;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.6rem 0.6rem 0.6rem 1.25rem;
  border-radius: 999px;
  background: rgba(251, 247, 241, 0.96);
  backdrop-filter: blur(10px);
  box-shadow: 0 12px 30px -10px rgba(61, 45, 30, 0.45);
  color: ${colors.text};
  transform: translateY(${(props) => (props.$visible ? '0' : '150%')});
  transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);

  span {
    font-size: 0.85rem;
    line-height: 1.2;
  }

  strong {
    display: block;
    font-size: 1.05rem;
  }

  a {
    min-height: 2.75rem;
    padding: 0 1.25rem;
    font-size: 0.9rem;
  }

  ${mediaQueries.medium`
    display: none;
  `}
`;

export default function LandingPage() {
  const { t } = useTranslation('home');
  const [showBar, setShowBar] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Seo title={t('seoTitle')} description={t('seoDescription')} />
      <HeaderPresentation />
      <About />
      <Spaces />
      <Presentation />
      <GalleryTeaser />
      <CtaBand />
      <MobileBookingBar $visible={showBar} aria-hidden={!showBar}>
        <span>
          {t('barSubtitle')}
          <strong>{t('barTitle')}</strong>
        </span>
        <ButtonLink href="/prices" tabIndex={showBar ? 0 : -1}>
          {t('checkAvailability')}
        </ButtonLink>
      </MobileBookingBar>
    </>
  );
}


export async function getServerSideProps({req, locale }) {
  const forwarded = req.headers["x-forwarded-for"]
  const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress

  // Visitor tracking must never take the home page down
  try {
    const visitor: Visitor | null = await prisma.visitor.findFirst({where: {ipAddress: ip}})

    if(visitor) {
      await prisma.visitor.update({data: {views:visitor.views +1 },where: {id: visitor.id}})
    } else {
      await prisma.visitor.create({data: {ipAddress:ip,views:1}})
    }
  } catch (e) {
    console.error('Could not track visitor', e)
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home','common'
      ])),
    },
  }
}
