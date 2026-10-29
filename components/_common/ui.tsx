import Link from 'next/link';
import styled, { css } from 'styled-components';

import { colors, fonts, mediaQueries } from '../../styles/theme';

export const Container = styled.div<{ $narrow?: boolean }>`
  width: 100%;
  max-width: ${(props) => (props.$narrow ? '52rem' : '75rem')};
  margin: 0 auto;
  padding: 0 1.25rem;

  ${mediaQueries.medium`
    padding: 0 2rem;
  `}
`;

export const Section = styled.section<{ $tone?: 'cream' | 'sand' | 'olive' }>`
  padding: 4.5rem 0;
  background: ${(props) =>
    props.$tone === 'sand' ? colors.sand : props.$tone === 'olive' ? colors.olive : colors.cream};
  color: ${(props) => (props.$tone === 'olive' ? colors.cream : colors.text)};

  ${mediaQueries.medium`
    padding: 7rem 0;
  `}
`;

export const Eyebrow = styled.span<{ $light?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${fonts.sans};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${(props) => (props.$light ? colors.linen : colors.clay)};

  &::before {
    content: '';
    width: 2rem;
    height: 1px;
    background: currentColor;
  }
`;

export const Heading = styled.h2<{ $light?: boolean; $center?: boolean }>`
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.1;
  letter-spacing: -0.01em;
  margin-top: 1rem;
  color: ${(props) => (props.$light ? colors.cream : colors.text)};
  text-align: ${(props) => (props.$center ? 'center' : 'left')};

  em {
    font-style: italic;
    color: ${(props) => (props.$light ? colors.linen : colors.clay)};
  }
`;

export const Lead = styled.p<{ $light?: boolean; $center?: boolean }>`
  font-size: 1.075rem;
  line-height: 1.75;
  color: ${(props) => (props.$light ? 'rgba(251, 247, 241, 0.85)' : colors.textSoft)};
  margin-top: 1.25rem;
  max-width: 38rem;
  text-align: ${(props) => (props.$center ? 'center' : 'left')};
  ${(props) => props.$center && 'margin-left: auto; margin-right: auto;'}

  ${mediaQueries.medium`
    font-size: 1.15rem;
  `}
`;

const buttonStyles = css<{ $variant?: 'solid' | 'outline' | 'light' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 3.25rem;
  padding: 0 1.75rem;
  border-radius: 999px;
  font-family: ${fonts.sans};
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: 1.5px solid transparent;
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    transform: translateY(-1px);
  }

  svg {
    transition: transform 0.25s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }

  ${(props) => {
    switch (props.$variant) {
      case 'outline':
        return css`
          color: ${colors.text};
          border-color: ${colors.text};
          background: transparent;
          &:hover {
            background: ${colors.text};
            color: ${colors.cream};
          }
        `;
      case 'light':
        return css`
          color: ${colors.cream};
          border-color: rgba(251, 247, 241, 0.7);
          background: rgba(251, 247, 241, 0.08);
          backdrop-filter: blur(6px);
          &:hover {
            background: ${colors.cream};
            color: ${colors.text};
          }
        `;
      default:
        return css`
          color: ${colors.white};
          background: ${colors.clay};
          &:hover {
            background: ${colors.clayDark};
          }
        `;
    }
  }}
`;

export const ButtonLink = styled(Link)<{ $variant?: 'solid' | 'outline' | 'light' }>`
  ${buttonStyles}
`;

export const TextLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  color: ${colors.clay};
  border-bottom: 1px solid currentColor;
  padding-bottom: 0.15rem;
  transition: color 0.2s ease, gap 0.2s ease;

  &:hover {
    color: ${colors.clayDark};
    gap: 0.75rem;
  }
`;

export const PageIntro = styled.header`
  background: ${colors.sand};
  padding: 8.5rem 0 3.5rem;
  text-align: center;

  ${mediaQueries.medium`
    padding: 10rem 0 5rem;
  `}

  h1 {
    font-family: ${fonts.serif};
    font-weight: 400;
    font-size: clamp(2.4rem, 6vw, 4rem);
    line-height: 1.05;
    margin-top: 1rem;

    em {
      font-style: italic;
      color: ${colors.clay};
    }
  }
`;
