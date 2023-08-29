import Image from 'next/image';
import * as React from 'react';
import styled, { css } from 'styled-components';

import { RandomImage } from '../../app/data/randomImages';
import { colors, mediaQueries } from '../../styles/theme';

const Cross = styled.div<{ $direction: 'vertical' | 'horizontal' }>`
  background: white;
  z-index: -1;
  border: 3px solid white;

  ${({ $direction }) => {
    if ($direction === 'vertical') {
      return css`
        height: 100%;
        width: 100px;
        left: 50%;
        top: -1px;
        position: absolute;
        transform: translateX(-50%);
      `;
    }
    return css`
      height: 100px;
      width: 100%;
      top: 50%;
      left: -1px;
      position: absolute;
      transform: translateY(-50%);
    `;
  }}
`;

const Square = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  border: 35px solid ${colors.cross};
  height: calc(100% - 3px);
  width: calc(100% - 3px);
  box-sizing: border-box;
`;

const CrossContainer = styled.div<{ $isHomePage: boolean }>`
  display: ${({ $isHomePage }) => ($isHomePage ? 'block' : 'none')};
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: -2;
  top: ${({ $isHomePage }) => ($isHomePage ? '50%' : '70%')};
  left: 50%;
  transform: translate(-50%, -50%);

  ${mediaQueries.medium`
  display: block;
  `};

  ${mediaQueries.large`
   top: 60%;
   width: 360px;
   height: 360px;
  `};

  @media screen and (max-height: 730px) {
    display: ${({ $isHomePage }) => ($isHomePage ? 'block' : 'none')};
  }

  @media screen and (min-height: 1100px) {
    top: 50%;
  }
`;

const CrossWrapper = styled.div`
  rotate: 45deg;
  transform-origin: center;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)<{ $isHomePage: boolean }>`
  display: ${({ $isHomePage }) => ($isHomePage ? 'block' : 'none')};
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
  object-fit: contain;
  max-height: 250px;
  margin: ${({ $isHomePage }) => ($isHomePage ? '7.5rem 0' : '0')};

  ${mediaQueries.medium`
    display: block;
    max-height: 250px;
  `};

  ${mediaQueries.large`
    transform: scale(1.2);
  `};

  @media screen and (max-height: 730px) {
    display: ${({ $isHomePage }) => ($isHomePage ? 'block' : 'none')};
  }
`;

type Props = {
  image: RandomImage;
  isHomePage?: boolean;
};

const ImageWithCross = ({ image, isHomePage = false }: Props) => {
  return (
    <>
      <CrossContainer $isHomePage={isHomePage}>
        <CrossWrapper>
          <Cross $direction="horizontal" />
          <Cross $direction="vertical" />
          <Square />
        </CrossWrapper>
      </CrossContainer>
      <StyledImage src={image.image} alt={image.alt} $isHomePage={isHomePage} />
    </>
  );
};

export default ImageWithCross;
