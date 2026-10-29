// @ts-nocheck --- Get rid of pointless linting errors in this file
import { css } from 'styled-components';

export const colors = {
  cream: '#FBF7F1',
  sand: '#F3EADD',
  linen: '#E9DCC9',
  clay: '#B4643C',
  clayDark: '#94502E',
  olive: '#3D4636',
  oliveDark: '#2C3327',
  sage: '#8A9A7B',
  text: '#2F2A25',
  textSoft: '#6B6158',
  white: '#FFFFFF',
  border: 'rgba(47, 42, 37, 0.12)',
};

export const fonts = {
  serif: 'var(--font-serif), Georgia, "Times New Roman", serif',
  sans: 'var(--font-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

export const radius = {
  sm: '0.5rem',
  md: '1rem',
  lg: '1.75rem',
};

export const shadows = {
  soft: '0 10px 30px -12px rgba(61, 45, 30, 0.25)',
  lifted: '0 24px 60px -20px rgba(61, 45, 30, 0.35)',
};

export const screenSizes = {
  small: 480,
  medium: 768,
  large: 1100,
};

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
