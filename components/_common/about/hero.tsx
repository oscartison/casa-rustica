import * as React from 'react';
import styled from 'styled-components';

import image from '../../../app/images/tvShow3.jpeg';
import {
  colors,
  fontWeights,
  mediaQueries,
  Variant,
} from '../../../styles/theme';
import ImageWithCorners from '../imageWithCorners';
import PageSection from '../pageSection';

const sizes = {
  small: {
    height: '264px',
    maxHeight: 'unset',
    cornerWidth: '48px',
    cornerHeight: '48px',
  },
  medium: {
    width: '100%',
    height: 'auto',
    maxHeight: 'auto',
    cornerWidth: '48px',
    cornerHeight: '48px',
  },
  large: {
    maxWidth: '880px',
    maxHeight: 'auto',
    cornerWidth: '48px',
    cornerHeight: '48px',
  },
};

const Container = styled.div<{ $isDryHire: boolean }>`
  display: flex;
  flex-direction: column;
  color: ${({ $isDryHire }) => ($isDryHire ? colors.primary : colors.white)};
  padding: 4rem 0;
  gap: 11.75rem;

  ${mediaQueries.medium`
    gap: 6.5rem;
  `};

  ${mediaQueries.large`
    flex-direction: row;
    justify-content: center;
    gap: 11.75rem;
  `};
`;

const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${mediaQueries.large`
    margin-top: 4rem;
  `};
`;

const Title = styled.h1`
  margin: 0;
  font-weight: ${fontWeights.light};
  line-height: 2.5rem;
  font-size: 1.75rem;

  ${mediaQueries.medium`
    font-weight: ${fontWeights.medium};
    line-height: 3rem;
    font-size: 2.25rem;
  `};
`;

const Subtitle = styled.h3`
  margin: 0;
  font-weight: ${fontWeights.light};
  line-height: 1.5rem;
  font-size: 1.5rem;

  ${mediaQueries.medium`
    font-weight: ${fontWeights.book};
    font-size: 1rem;
  `};
`;

type Props = {
  variant: Variant;
};

const Hero = ({ variant }: Props) => {
  const isDryHire = React.useMemo(() => {
    return variant === Variant.DRY_HIRE;
  }, [variant]);

  return (
    <PageSection backgroundColor={isDryHire ? colors.white : colors.text}>
      <Container $isDryHire={isDryHire}>
        <TitlesContainer>
          <Title>About</Title>
          <Subtitle>About AVM</Subtitle>
        </TitlesContainer>
        {/* TODO: Change to correct image */}
        <ImageWithCorners
          src={image}
          alt=""
          cornerPosition="left"
          sizes={sizes}
        />
      </Container>
    </PageSection>
  );
};

export default Hero;
