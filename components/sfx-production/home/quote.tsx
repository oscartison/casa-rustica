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
  align-items: center;
  gap: 3rem;
  margin: 3rem 0 5rem;
  width: 100%;
  max-width: 1600px;

  ${mediaQueries.medium`
    gap: 1rem;
    justify-content: space-between;
    flex-direction: row;
  `};

  ${mediaQueries.large`
    gap: 10.5rem;
    margin-left: auto;
    margin-right: auto;
  `};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${mediaQueries.large`
    gap: 10.5rem;
    flex-direction: row;
 `}
`;

const Title = styled.h4`
  margin: 0;
  color: ${colors.primary};
  font-weight: ${fontWeights.bold};
  line-height: 1.5rem;
  font-size: 1.25rem;

  ${mediaQueries.large`
    font-weight: ${fontWeights.light};
    font-size: 2rem;
    line-height: 2.5rem;
  `};
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${colors.text};

  ${mediaQueries.medium`
    max-width: 400px;
  `};
`;

const ButtonWrapper = styled.div`
  ${mediaQueries.large`
  align-self: baseline;
  `};
`;

const GetAQuote = () => {
  const isSmall = useMediaQuery(`(max-width: ${screenSizes.medium - 1}px)`);

  return (
    <PageSection backgroundColor={colors.white}>
      <Container>
        <TextContainer>
          <Title>Get a quote</Title>
          <Text>
            If you already have a clear view on what you need, the most
            efficient way to get started is to send us your requirements by mail
            to info@avm-sfx.com to get a quote. Don&apos;t forget to mention the
            dates on wich you&apos;ll need the equipment and the location for
            delivery and return.
          </Text>
        </TextContainer>
        <ButtonWrapper>
          <Button
            type="button"
            variant="primary"
            text="Get advice from SFX experts"
            fullWidth={isSmall}
            href="/contact"
            hideIcon
          />
        </ButtonWrapper>
      </Container>
    </PageSection>
  );
};

export default GetAQuote;
