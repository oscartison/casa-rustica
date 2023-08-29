import Image from 'next/image';
import * as React from 'react';
import styled from 'styled-components';

import { type Partner } from '../../../app/data/partners';
import { colors, fontWeights, mediaQueries } from '../../../styles/theme';
import Button from '../../_common/button';
import PageSection from '../../_common/pageSection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  justify-content: center;

  ${mediaQueries.large`
    justify-content: space-between;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  `};
`;

const Title = styled.h3`
  color: ${colors.primary};
  font-size: 1.5rem;
  font-weight: ${fontWeights.light};
  line-height: 2rem;
  margin: 0;

  ${mediaQueries.medium`
   font-size: 2rem;
  `};

  ${mediaQueries.large`
   font-size: 2.5rem;
  `};
`;

const Center = styled.div`
  ${mediaQueries.large`
  display: flex;
  justify-content: center;
  `};
`;

const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  row-gap: 1rem;
  justify-content: space-evenly;
  margin: 2rem 0 5rem;
  width: 100%;
  max-width: 85rem;

  ${mediaQueries.medium`
    gap: 3rem;
    row-gap: 4rem;
  `}
  ${mediaQueries.large`
    gap: 7.5rem;
    row-gap: 5.25rem;
  `}
`;

const LogoWrapper = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  width: 120px;
  height: fit-content;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${colors.divider};
  padding-top: 3rem;
  gap: 1.5rem;
  margin-bottom: 3rem;

  ${mediaQueries.medium`
    flex-direction: row;
    justify-content: space-between;
  `};
`;

const ContactText = styled.p`
  line-height: 1.5rem;
  font-size: 1rem;
  color: ${colors.text};
  max-width: 400px;
`;

type Props = {
  partners: Partner[];
};

const Partners = ({ partners }: Props) => {
  return (
    <PageSection backgroundColor={colors.white}>
      <Container>
        <Center>
          <Title>Partners</Title>
          <LogosContainer>
            {partners.map((partner) => (
              <LogoWrapper key={partner.id}>
                <StyledImage
                  src={partner.image}
                  alt={partner.name}
                  title={partner.name}
                />
              </LogoWrapper>
            ))}
          </LogosContainer>
        </Center>
        <ContactContainer>
          <ContactText>
            Reach out to us for the best advice and service at an unbeatable
            price!
          </ContactText>
          <Button
            type="button"
            variant="primary"
            text="Contact"
            href="/contact"
          />
        </ContactContainer>
      </Container>
    </PageSection>
  );
};

export default Partners;
