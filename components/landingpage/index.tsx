import Image from 'next/image';
import * as React from 'react';
import styled, { css } from 'styled-components';

import { type RandomImage } from '../../app/data/randomImages';
import Logo from '../../app/logos/logoAVMSFX.svg';
import useMediaQuery from '../../hooks/useMediaQuery';
import {
  colors,
  fontWeights,
  mediaQueries,
  screenSizes,
  Variant,
} from '../../styles/theme';
import Button from '../_common/button';
import ImageWithCross from '../_common/imageWithCross';

const Container = styled.div<{ $variant: Variant }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 50vh;
  z-index: 2;

  background-color: ${({ $variant }) =>
    $variant === Variant.DRY_HIRE ? colors.white : colors.text};

  color: ${({ $variant }) =>
    $variant === Variant.DRY_HIRE ? colors.black : colors.white};

  @media screen and (max-height: 730px) {
    height: 55vh;
  }

  ${mediaQueries.medium`
    height: 100vh;
    width: 50vw;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 2.25rem 1rem 3rem;

  ${mediaQueries.medium`
    margin: 4.5rem 3.25rem 4rem;
  `}

  ${mediaQueries.large`
    margin: 4rem 5rem 6rem;
  `}
`;

const Title = styled.h1<{ $variant: Variant }>`
  display: none;
  font-size: 2rem;
  font-weight: ${fontWeights.medium};
  line-height: 1;
  margin-bottom: 1rem;
  color: ${({ $variant }) =>
    $variant === Variant.DRY_HIRE ? colors.primary : colors.white};

  ${mediaQueries.medium`
    display: block;
  `}

  ${mediaQueries.large`
    font-size: 3rem;
  `}
`;

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.5rem;
  letter-spacing: 1px;

  ${mediaQueries.medium`
    letter-spacing: 2px;
  `}

  ${mediaQueries.large`
    font-size: 1rem;
  `}
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: ${fontWeights.book};
  max-width: 17.5rem;
  text-align: center;

  ${mediaQueries.medium`
    font-weight: ${fontWeights.medium};
  `};
`;

const Column = styled.div<{ $gap: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${mediaQueries.medium`
      gap: ${({ $gap }) => $gap};
  `};
`;

const StyledLogo = styled(Logo)<{ $variant: Variant }>`
  display: ${({ $variant }) =>
    $variant === Variant.DRY_HIRE ? 'block' : 'none'};

  ${mediaQueries.medium`
    display: block; 
    width: 248px;
    height: 80px;
  `};

  > g > path:nth-child(2) {
    fill: ${({ $variant }) =>
      $variant === Variant.DRY_HIRE ? colors.black : colors.white};
  }
`;

const ClearButton = styled(Button)`
  border-color: transparent;
  background-color: transparent;

  > div {
    > p {
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: ${fontWeights.medium};
      letter-spacing: 1px;
    }
    > svg {
      transform: scale(1.5);
      > path {
        fill: ${colors.primary};
      }
    }
  }

  ${mediaQueries.medium`
    display: none;
  `};
`;

const Divider = styled.div<{ $variant: Variant }>`
  display: ${({ $variant }) =>
    $variant === Variant.DRY_HIRE ? 'block' : 'none'};
  width: 100%;
  border-top: 0.25rem solid ${colors.divider};
  margin: 2.25rem 0 3rem;

  ${mediaQueries.medium`
    display: none;
  `};
`;

const StyledButton = styled(Button)`
  display: none;

  ${mediaQueries.medium`
    display: block;
  `};
`;

const StyledImage = styled(Image)<{ $variant: Variant }>`
  display: none;
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
  object-fit: ${({ $variant }) =>
    $variant === Variant.DRY_HIRE ? 'contain' : 'cover'};

  ${mediaQueries.medium`
    display: block;
    max-height:  ${({ $variant }) =>
      $variant === Variant.DRY_HIRE ? '250px' : '100%'};
  `};

  ${mediaQueries.large`
    transform: ${({ $variant }) =>
      $variant === Variant.DRY_HIRE ? 'scale(1.2)' : 'scale(1)'}; 
  `};

  @media screen and (max-height: 730px) {
    display: none;
  }
`;

const Gradient = styled.div<{ $variant: Variant }>`
  display: ${({ $variant }) =>
    $variant === Variant.DRY_HIRE ? 'flex' : 'block'};

  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;

  ${mediaQueries.medium`
    margin-top: ${({ $variant }) =>
      $variant === Variant.DRY_HIRE ? '15rem' : '0'};

  `};

  ${({ $variant }) => {
    if ($variant === Variant.SFX_PRODUCTIONS) {
      return css`
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(47, 46, 46, 1),
            rgba(47, 46, 46, 0)
          );

          z-index: 1;
        }
      `;
    }
    return '';
  }}

  @media screen and (min-height: 1100px) {
    align-items: center;
    margin-top: 5rem;
  }
`;

const Absolute = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  z-index: 3;
`;

type Props = {
  variant: Variant;
  randomImage: RandomImage;
};

const HalfLandingPage = ({ variant, randomImage }: Props) => {
  const isSmall = useMediaQuery(`(max-width: ${screenSizes.medium}px)`);

  const isDryHire = React.useMemo<boolean>(() => {
    return variant === Variant.DRY_HIRE;
  }, [variant]);

  return (
    <Container $variant={variant}>
      <Content>
        <Absolute>
          <Column $gap="5rem">
            <StyledLogo $variant={variant} />
            <Divider $variant={variant} />
            <Title $variant={variant}>
              {isDryHire ? 'DRY HIRE' : 'DARE TO AMAZE'}
            </Title>
            {isSmall && (
              <ClearButton
                type="button"
                variant={isDryHire ? 'secondary' : 'primary'}
                text={isDryHire ? 'DRY HIRE' : 'DARE TO AMAZE'}
                href={isDryHire ? '/dry-hire/home' : '/sfx-production/home'}
              />
            )}
          </Column>
          <SubtitleContainer>
            {isDryHire ? (
              <>
                <Subtitle>RENTAL</Subtitle>
                <Subtitle>|</Subtitle>
                <Subtitle>DISTRIBUTION</Subtitle>
                <Subtitle>|</Subtitle>
                <Subtitle>SUPPORT</Subtitle>
              </>
            ) : (
              <Subtitle>SFX PRODUCTIONS</Subtitle>
            )}
          </SubtitleContainer>
        </Absolute>
        <Gradient $variant={variant}>
          {isDryHire ? (
            <ImageWithCross image={randomImage} />
          ) : (
            <StyledImage
              src={randomImage.image}
              alt={randomImage.alt}
              $variant={variant}
            />
          )}
        </Gradient>
        <Column $gap="2rem">
          <Description>
            {isDryHire
              ? 'Special effects & pyrotechnics for professionals.'
              : 'Passion & innovative perspective for a dash of extra fun in your project.'}
          </Description>
          <StyledButton
            type="button"
            variant={isDryHire ? 'secondary' : 'primary'}
            text="Go to website"
            href={
              isDryHire
                ? `/dry-hire/home?imageId=${randomImage.id}`
                : `/sfx-production/home?imageId=${randomImage.id}`
            }
            linkAs={isDryHire ? '/dry-hire/home' : '/sfx-production/home'}
          />
        </Column>
      </Content>
    </Container>
  );
};

export default HalfLandingPage;
