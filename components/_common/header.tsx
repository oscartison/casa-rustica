import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import styled, { css } from 'styled-components';

import { colors, fonts, mediaQueries, shadows } from '../../styles/theme';
import { LanguagePicker } from './languageSwitcher';
import { ButtonLink } from './ui';

interface HeaderProps {
  links: { link: string; label: string }[];
  transparentOnTop?: boolean;
}

const Bar = styled.header<{ $solid: boolean }>`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 200;
  transition: background-color 0.35s ease, box-shadow 0.35s ease, color 0.35s ease, padding 0.35s ease;
  color: ${colors.cream};
  padding: 1.1rem 0;

  ${(props) =>
    props.$solid &&
    css`
      background: rgba(251, 247, 241, 0.94);
      backdrop-filter: saturate(1.4) blur(10px);
      box-shadow: 0 1px 0 ${colors.border};
      color: ${colors.text};
      padding: 0.7rem 0;
    `}
`;

const Inner = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  ${mediaQueries.medium`
    padding: 0 2rem;
  `}
`;

const Brand = styled(Link)`
  display: flex;
  flex-direction: column;
  line-height: 1;
  position: relative;
  z-index: 2;

  strong {
    font-family: ${fonts.serif};
    font-weight: 500;
    font-size: 1.6rem;
    letter-spacing: -0.01em;
  }

  span {
    margin-top: 0.3rem;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    opacity: 0.75;
  }
`;

const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: 2rem;

  ${mediaQueries.large`
    display: flex;
  `}
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  position: relative;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.4rem 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1.5px;
    background: currentColor;
    transform: scaleX(${(props) => (props.$active ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const Actions = styled.div`
  display: none;
  align-items: center;
  gap: 1rem;

  ${mediaQueries.large`
    display: flex;
  `}
`;

const SmallCta = styled(ButtonLink)`
  min-height: 2.6rem;
  padding: 0 1.25rem;
  font-size: 0.9rem;
`;

const Burger = styled.button<{ $open: boolean }>`
  position: relative;
  z-index: 2;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;

  ${mediaQueries.large`
    display: none;
  `}

  span {
    position: absolute;
    left: 0.6rem;
    right: 0.6rem;
    height: 1.5px;
    background: currentColor;
    transition: transform 0.3s ease, opacity 0.3s ease, top 0.3s ease;
  }

  span:nth-child(1) {
    top: ${(props) => (props.$open ? '50%' : '35%')};
    transform: ${(props) => (props.$open ? 'rotate(45deg)' : 'none')};
  }
  span:nth-child(2) {
    top: 50%;
    opacity: ${(props) => (props.$open ? 0 : 1)};
  }
  span:nth-child(3) {
    top: ${(props) => (props.$open ? '50%' : '65%')};
    transform: ${(props) => (props.$open ? 'rotate(-45deg)' : 'none')};
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 190;
  background: ${colors.cream};
  color: ${colors.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  padding: 6rem 1.75rem 2.5rem;
  opacity: ${(props) => (props.$open ? 1 : 0)};
  visibility: ${(props) => (props.$open ? 'visible' : 'hidden')};
  transition: opacity 0.35s ease, visibility 0.35s ease;
  box-shadow: ${shadows.soft};

  ${mediaQueries.large`
    display: none;
  `}

  nav {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }

  nav a {
    font-family: ${fonts.serif};
    font-size: 2.25rem;
    line-height: 1.1;
  }

  nav a[aria-current='page'] {
    font-style: italic;
    color: ${colors.clay};
  }
`;

export function HeaderResponsive({ links, transparentOnTop = false }: HeaderProps) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  React.useEffect(() => {
    const close = () => setOpen(false);
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router.events]);

  const solid = !transparentOnTop || scrolled || open;

  return (
    <>
      <Bar $solid={solid}>
        <Inner>
          <Brand href="/" aria-label="Casa Rustica">
            <strong>Casa Rustica</strong>
            <span>De Haan</span>
          </Brand>

          <Nav aria-label="Main">
            {links.map((link) => (
              <NavLink key={link.link} href={link.link} $active={router.pathname === link.link}>
                {link.label}
              </NavLink>
            ))}
          </Nav>

          <Actions>
            <LanguagePicker light={!solid} />
            <SmallCta href="/prices">{t('bookNow')}</SmallCta>
          </Actions>

          <Burger
            type="button"
            $open={open}
            aria-label={open ? t('closeMenu') : t('openMenu')}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </Burger>
        </Inner>
      </Bar>

      <MobileMenu $open={open} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.link}
              href={link.link}
              tabIndex={open ? 0 : -1}
              aria-current={router.pathname === link.link ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div>
          <LanguagePicker />
        </div>
        <ButtonLink href="/prices" tabIndex={open ? 0 : -1}>
          {t('bookNow')}
        </ButtonLink>
      </MobileMenu>
    </>
  );
}
