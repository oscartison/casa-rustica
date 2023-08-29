import * as React from 'react';
import styled from 'styled-components';

import useMediaQuery from '../../../hooks/useMediaQuery';
import {
  colors,
  fontWeights,
  mediaQueries,
  screenSizes,
} from '../../../styles/theme';
import Button from '../../_common/button';
import PageSection from '../../_common/pageSection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  gap: 2rem;
  padding: 4rem 0 5rem;

  ${mediaQueries.large`
    flex-direction: row;
    justify-content: space-between;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  `};
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: ${fontWeights.light};
  line-height: 2rem;
  margin: 0;

  ${mediaQueries.medium`
    line-height: 2.5rem;
  `};

  ${mediaQueries.large`
   font-size: 2.5rem; 
   line-height: 3rem;
  `};
`;

const Text = styled.p`
  line-height: 1.5rem;
  font-size: 1rem;

  ${mediaQueries.medium`
    max-width: 480px;
  `};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${mediaQueries.medium`
    flex-direction: row;
    justify-content: space-between;
  `};

  ${mediaQueries.large`
    gap: 5rem;
    justify-content: unset;
  `};
`;

const GetInTouch = () => {
  const isSmall = useMediaQuery(`(max-width: ${screenSizes.medium}px)`);

  return (
    <PageSection backgroundColor={colors.text}>
      <Container>
        <Title>Get in Touch</Title>
        <ButtonContainer>
          <Text>
            We can assist you with project visualizations, timecode programming,
            and finding extra crew as an additional service. We have a network
            of technicians, operators, and logistic partners to deal with the
            challenges specific to our industry.
          </Text>
          <Button
            type="button"
            variant="primary"
            text="Contact"
            href="/contact"
            fullWidth={isSmall}
          />
        </ButtonContainer>
      </Container>
    </PageSection>
  );
};

export default GetInTouch;
