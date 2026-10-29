import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { IconAt, IconMapPin, IconPhone } from '@tabler/icons-react';
import styled from 'styled-components';

import { colors, fonts, mediaQueries } from '../../styles/theme';
import { Container } from './ui';

const Wrapper = styled.footer`
  background: ${colors.oliveDark};
  color: rgba(251, 247, 241, 0.8);
  padding: 4rem 0 2rem;
  font-size: 0.95rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2.5rem;

  ${mediaQueries.medium`
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 3rem;
  `}
`;

const Brand = styled.div`
  strong {
    display: block;
    font-family: ${fonts.serif};
    font-weight: 400;
    font-size: 2rem;
    color: ${colors.cream};
  }

  p {
    margin-top: 1rem;
    max-width: 22rem;
    line-height: 1.7;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${colors.linen};
  margin-bottom: 1.1rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  a,
  li {
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }

  a:hover {
    color: ${colors.cream};
  }

  svg {
    flex-shrink: 0;
    color: ${colors.sage};
  }
`;

const Bottom = styled.div`
  margin-top: 3.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(251, 247, 241, 0.12);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: rgba(251, 247, 241, 0.55);

  ${mediaQueries.medium`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

const Footer = ({ links }: { links: { link: string; label: string }[] }) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Container>
        <Grid>
          <Brand>
            <strong>Casa Rustica</strong>
            <p>{t('footerTagline')}</p>
          </Brand>
          <div>
            <ColumnTitle>{t('explore')}</ColumnTitle>
            <List>
              {links.map((link) => (
                <li key={link.link}>
                  <Link href={link.link}>{link.label}</Link>
                </li>
              ))}
            </List>
          </div>
          <div>
            <ColumnTitle>{t('getInTouch')}</ColumnTitle>
            <List>
              <li>
                <a href="mailto:info@casarustica.be">
                  <IconAt size={18} stroke={1.5} /> info@casarustica.be
                </a>
              </li>
              <li>
                <a href="tel:+32475856319">
                  <IconPhone size={18} stroke={1.5} /> +32 475 85 63 19
                </a>
              </li>
              <li>
                <IconMapPin size={18} stroke={1.5} /> Sparrenboslaan 26, 8420 De Haan
              </li>
            </List>
          </div>
        </Grid>
        <Bottom>
          <span>© {new Date().getFullYear()} Casa Rustica · De Haan</span>
          <span>{t('lodgingDecree')}</span>
        </Bottom>
      </Container>
    </Wrapper>
  );
};

export default Footer;
