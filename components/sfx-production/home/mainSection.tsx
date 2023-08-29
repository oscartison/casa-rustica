import Image from 'next/image';
import * as React from 'react';
import styled from 'styled-components';

import tvShow from '../../../app/images/tvShow3.jpeg';
import useMediaQuery from '../../../hooks/useMediaQuery';
import {
  colors,
  fontWeights,
  mediaQueries,
  screenSizes,
} from '../../../styles/theme';
import Button from '../../_common/button';
import ImageWithCorners from '../../_common/imageWithCorners';
import PageSection from '../../_common/pageSection';

const sizes = {
  small: {
    height: '360px',
    maxHeight: 'unset',
    cornerWidth: '48px',
    cornerHeight: '48px',
  },
  medium: {
    width: '360px',
    height: '480px',
    maxHeight: '480px',
    cornerWidth: '48px',
    cornerHeight: '48px',
  },
  large: {
    maxWidth: '880px',
    maxHeight: '480px',
    cornerWidth: '48px',
    cornerHeight: '48px',
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.75rem;
  color: ${colors.primary};
  margin: 0;
  line-height: 2.5rem;
  font-weight: ${fontWeights.light};

  ${mediaQueries.medium`
   font-size: 2.25rem;
   line-height: 3rem;
  `};
`;

const Text = styled.p`
  line-height: 1.5rem;
  color: ${colors.text};

  ${mediaQueries.medium`
    width: 18.5rem;
  `};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 4rem 0;
  max-width: 1600px;

  ${mediaQueries.medium`
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
  `};

  ${mediaQueries.large`
    gap: 10.5rem;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
  `};
`;

const StyledImage = styled(Image)`
  height: 240px;
  width: 100%;
  object-fit: cover;

  ${mediaQueries.medium`
   height: 240px;
  `};

  ${mediaQueries.large`
   height: 480px;
   max-width: 100%
  `};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${mediaQueries.medium`
    gap: 2rem;
  `};
`;

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${mediaQueries.large`
    gap: 10.5rem;
    flex-direction: row;
  `}
`;

const ButtonWrapper = styled.div`
  ${mediaQueries.large`
  align-self: baseline;
  `};
`;

const HistoryText = styled(Text)`
  ${mediaQueries.medium`
  width: 25rem;
  `}
`;

const MainSection = () => {
  const isSmall = useMediaQuery(`(max-width: ${screenSizes.medium - 1}px)`);

  return (
    <Container>
      <PageSection backgroundColor={colors.white}>
        <Section>
          <Column>
            <Title>Special effects at its best</Title>
            <Text>
              From a modest private party, a sports competition, stylish
              business event, all the way to the biggest festivals in the world…
              With years of know-how in special effects and pyrotechnics, we
              have created countless unforgettable moments worldwide.
            </Text>
            <Button
              type="button"
              variant="primary"
              href="/sfx-production/projects"
              text="Show projects"
            />
          </Column>
          <ImageWithCorners
            src={tvShow}
            alt="tv show effects"
            cornerPosition="left"
            sizes={sizes}
          />
        </Section>
      </PageSection>
      <PageSection backgroundColor={colors.lightBackground}>
        <Section>
          <HistoryContainer>
            <Title>History & info AVM</Title>
            <HistoryText>
              Safety & quality are our main concerns, no matter the size of your
              event. Our passion & innovative perspective for special effects &
              pyrotechnics garantees the best and personal service straight from
              experienced experts.
            </HistoryText>
          </HistoryContainer>
          <ButtonWrapper>
            <Button
              type="button"
              variant="primary"
              text="Read more"
              href="/sfx-production/about"
              hideIcon
              fullWidth={isSmall}
            />
          </ButtonWrapper>
        </Section>
      </PageSection>
      {/* TODO: Replace this image with a picture of the facade. */}
      <StyledImage src={tvShow} alt="facade of AVM building" />
    </Container>
  );
};

export default MainSection;
