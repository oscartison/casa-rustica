// @ts-nocheck --- Get rid of pointless linting errors in this file
import { css, styled } from 'styled-components';

export const colors = {
  white: '#FFF',
  black: '#000',
  text: '#2F2E2E',
  lightBackground: '#F9F9F9',
  details: '#8F8D8D',
  detailsLight: '#E2DDDD',
  primary: '#E30613',
  transparent: '#00000000',
  divider: '#DFD9D9',
  cross: '#F5F5F5',
};

export const screenSizes = {
  small: 480,
  medium: 768,
  large: 1440,
};

export const fontWeights = {
  light: 300,
  book: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 800,
  ultra: 900,
};

export enum Variant {
  DRY_HIRE = 'DRY_HIRE',
  SFX_PRODUCTIONS = 'SFX_PRODUCTIONS',
}

export const mediaQueries = {
  small: (...args: any) => css`
    @media only screen and (min-width: ${screenSizes.small}px) {
      ${css(...args)}
    }
  `,
  medium: (...args: any) => css`
    @media only screen and (min-width: ${screenSizes.medium}px) {
      ${css(...args)}
    }
  `,
  large: (...args: any) => css`
    @media only screen and (min-width: ${screenSizes.large}px) {
      ${css(...args)}
    }
  `,
};

export const fonts = {
  metropolis: {
    src: [
      {
        path: './',
        weight: '400',
        style: 'normal',
      },
    ],
  },
};

function makeTextStyle(
  fontWeight = fontWeights.book,
  fontSize = '1em',
  letterSpacing = 0,
  lineHeight = 'normal',
) {
  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    letter-spacing: ${letterSpacing};
    line-height: ${lineHeight};
  `;
}

export const Title = styled.h1`
  font-family: 'Metropolis';
  color: ${colors.black};
  ${makeTextStyle(fontWeights.book, '2rem', '0', '1')};
  ${mediaQueries.medium`
    ${makeTextStyle(fontWeights.book, '4rem', '0', '1')};
  `}
  ${mediaQueries.large`
    ${makeTextStyle(fontWeights.book, '7.5rem', '0', '1')};
  `}
`;
export const Subtitle = styled.h2`
  font-family: 'Metropolis';
  color: ${colors.black};
  ${makeTextStyle(fontWeights.book, '1.25rem', '0', '1.2')};
  ${mediaQueries.medium`
    ${makeTextStyle(fontWeights.book, '2rem', '0', '1.25')};
  `}
  ${mediaQueries.large`
    ${makeTextStyle(fontWeights.black, '2rem', '0', '1.25')};
  `}
`;
export const TextBox = styled.p`
  font-family: 'Metropolis';
  color: ${colors.black};
  ${makeTextStyle(fontWeights.book, '1rem', '0', '1.5')};
  ${mediaQueries.medium`
    ${makeTextStyle(fontWeights.book, '1rem', '0', '1.5')};
  `}
  ${mediaQueries.large`
    ${makeTextStyle(fontWeights.book, '1.5rem', '0', '1.333')};
  `}
`;
export const SmallTextBox = styled.span`
  font-family: 'Metropolis';
  color: ${colors.black};
  ${makeTextStyle(fontWeights.book, '0.75rem', '0', '1.333')};
`;
export const BigTextBox = styled.span`
  font-family: 'Metropolis';
  color: ${colors.black};
  ${makeTextStyle(fontWeights.book, '1.5rem', '0', '1.5')};
`;
