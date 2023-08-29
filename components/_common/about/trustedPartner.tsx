import Image from 'next/image';
import * as React from 'react';
import { styled } from 'styled-components';

import placeholder from '../../../app/images/events/outdoorEvent2.jpg';
import { colors, fontWeights, mediaQueries } from '../../../styles/theme';
import PageSection from '../pageSection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  color: ${colors.white};
`;

const Title = styled.h3`
  font-weight: ${fontWeights.light};
  font-size: 1.75rem;
  line-height: 2.5rem;
  margin: 0 0 3rem 0;

  ${mediaQueries.medium`
    font-size: 2.25rem;
    line-height: 3rem;
  `};
`;

const Subtitle = styled.h4`
  margin: 0;
  font-weight: ${fontWeights.bold};
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;

  ${mediaQueries.medium`
    flex-direction: row;
  `};

  ${mediaQueries.large`
    flex-direction: column;
    max-width: 30rem;
  `};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${mediaQueries.large`
    flex-direction: row;
  `};
`;

const TrustedPartner = () => {
  return (
    <PageSection backgroundColor={colors.text}>
      <Container>
        <Title>A trusted partner</Title>
        <Content>
          <SectionContainer>
            <Section>
              <Subtitle>One eye on the future</Subtitle>
              <Text>
                We always keep up with the latest techniques and trends.
                Regularly scheduled professional training courses ensure that we
                comply with all necessary licenses and certificates.
              </Text>
            </Section>
            <Section>
              <Subtitle>We know our stuff</Subtitle>
              <Text>
                We only use high-quality and word-class renowned special effects
                and pyrotechnic products. Hardware and consumables from brands
                such as Magic FX, Galaxis, Explo, Ultratec, Showven, Hansol FX,
                will take your event to the next level.
              </Text>
            </Section>
          </SectionContainer>
          {/* TODO: Replace with certificates */}
          <Image src={placeholder} alt="certificates" />
        </Content>
      </Container>
    </PageSection>
  );
};

export default TrustedPartner;
