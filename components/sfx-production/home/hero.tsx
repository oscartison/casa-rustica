import * as React from 'react';
import styled from 'styled-components';

import { type RandomImage } from '../../../app/data/randomImages';
import { colors, fontWeights, mediaQueries } from '../../../styles/theme';
import Button from '../../_common/button';
import ImageWithCorners from '../../_common/imageWithCorners';
import PageSection from '../../_common/pageSection';

const sizes = {
  small: {
    height: '360px',
    maxHeight: 'unset',
    cornerWidth: '48px',
    cornerHeight: '60px',
  },
  medium: {
    width: '100%',
    height: '896px',
    maxHeight: 'auto',
    cornerWidth: '64px',
    cornerHeight: '64px',
  },
  large: {
    maxWidth: '100%',
    maxHeight: 'auto',
    cornerWidth: '240px',
    cornerHeight: '240px',
  },
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem 0 3rem;
`;

const StyledImage = styled(ImageWithCorners)<{
  $cornerPosition: 'left' | 'right';
}>`
  z-index: 2;
  ${mediaQueries.large`
    padding: 1rem;
    background: ${({ $cornerPosition }) => {
      if ($cornerPosition === 'left') {
        return `linear-gradient(to right, ${colors.primary} 20px, transparent 20px) 0 0,
    linear-gradient(to left, ${colors.primary} 20px, transparent 20px) 100% 100%,
    linear-gradient(to bottom, ${colors.primary} 20px, transparent 20px) 0 0,
    linear-gradient(to top, ${colors.primary} 20px, transparent 20px) 100% 100%;`;
      }
      if ($cornerPosition === 'right') {
        return `linear-gradient(
        to right,
        ${colors.primary} 20px,
        transparent 20px
      )
      0 100%,
    linear-gradient(to left, ${colors.primary} 20px, transparent 20px) 100% 0,
    linear-gradient(to bottom, ${colors.primary} 20px, transparent 20px) 100% 0,
    linear-gradient(to top, ${colors.primary} 20px, transparent 20px) 0 100%;`;
      }
      return `none`;
    }};
    background-repeat: no-repeat;
    background-size: 240px 240px;
  `};
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.75rem;
  line-height: 2rem;
  font-weight: ${fontWeights.medium};

  ${mediaQueries.medium`
    font-size: 3rem;
    line-height: 3rem;
  `};
`;

const SubTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 2px;
  font-weight: ${fontWeights.medium};
`;

const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${colors.white};
  position: absolute;
  margin-top: 5rem;
  z-index: 3;
  transition: all ease-in-out 0.3s;

  ${mediaQueries.medium`
    gap: 1.5rem;
  `};

  ${mediaQueries.large`
    margin-top: 15rem;
  `};
`;

const AbsoluteButton = styled(Button)`
  display: none;

  ${mediaQueries.medium`
    margin-top: 2.5rem;
    display: block;
  `};
`;

const MobileButton = styled(Button)`
  ${mediaQueries.medium`
    display: none
  `};
`;

const Gradient = styled.div`
  display: block;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(47, 46, 46, 0.6),
      rgba(47, 46, 46, 0.1)
    );

    margin: 0.5rem;
    z-index: 1;
  }

  ${mediaQueries.large`
    &::before {
      margin: 1rem;
    }
  `};
`;

type Props = {
  randomEvent: RandomImage;
};

const Hero = ({ randomEvent }: Props) => {
  return (
    <PageSection backgroundColor={colors.text}>
      <Container>
        <TitlesContainer>
          <Title>DARE TO AMAZE</Title>
          <SubTitle>SFX Productions</SubTitle>
          <AbsoluteButton
            type="button"
            variant="primary"
            text="Get advice from SFX experts"
            href="/contact"
            hideIcon
          />
        </TitlesContainer>
        <Gradient>
          <StyledImage
            src={randomEvent.image}
            alt="Sfx production dare to amaze"
            cornerPosition="left"
            $cornerPosition="left"
            sizes={sizes}
          />
        </Gradient>
        <MobileButton
          type="button"
          variant="primary"
          text="Get advice from SFX experts"
          href="/contact"
          hideIcon
        />
      </Container>
    </PageSection>
  );
};

export default Hero;
