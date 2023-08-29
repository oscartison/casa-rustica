import * as React from 'react';
import styled from 'styled-components';

import DownloadSVG from '../../../app/icons/download.svg';
import pyrotecpanel from '../../../app/images/pyrotecpanel.webp';
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
    height: '280px',
    maxHeight: 'unset',
    cornerWidth: '64px',
    cornerHeight: '64px',
  },
  medium: {
    width: '100%',
    height: 'auto',
    maxHeight: '560px',
    cornerWidth: '64px',
    cornerHeight: '64px',
  },
  large: {
    maxWidth: '840px',
    maxHeight: '560px',
    cornerWidth: '80px',
    cornerHeight: '80px',
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div<{ $padding: string; $gap: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ $padding }) => $padding};
  gap: ${({ $gap }) => $gap};

  ${mediaQueries.medium`
   flex-direction: row;
   gap: 4rem;
   padding: 5rem 0;
  `};

  ${mediaQueries.large`
   gap: 4.5rem;
   justify-content: space-between;
   padding: 7.5rem 0;
   margin-left: auto;
   margin-right: auto;
   max-width: 1600px;
  `};
`;

const Title = styled.h3`
  color: ${colors.primary};
  font-size: 1.5rem;
  font-weight: ${fontWeights.light};
  line-height: 2rem;
  margin: 0 0 1.5rem 0;

  ${mediaQueries.medium`
   margin-top: 2.625rem;
   font-size: 2rem;
  `};

  ${mediaQueries.large`
   margin-bottom: 2.625rem;
   font-size: 2.5rem;
  `};
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${colors.text};
  line-height: 1.5rem;
  font-size: 1rem;

  ${mediaQueries.medium`
    > p {
    width: 400px;
    }
  `};

  ${mediaQueries.large`
   flex-direction: row;
   gap: 4rem;
  `};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;

  ${mediaQueries.medium`
    margin-top: 3rem;
    align-items: flex-end;
  `};
`;

const StyledDownloadSVG = styled(DownloadSVG)`
  > path {
    fill: ${colors.primary};
  }
`;

const Grow = styled.div`
  flex-grow: 1;
  ${mediaQueries.large`
    flex-grow: 0
  `};
`;

const InfoSection = () => {
  const isSmall = useMediaQuery(`(max-width: ${screenSizes.medium}px)`);

  return (
    <Container>
      <PageSection backgroundColor={colors.lightBackground}>
        <Section $padding="2.5rem 0 5rem" $gap="2rem">
          <ImageWithCorners
            src={pyrotecpanel}
            alt="Pyrotec panel"
            cornerPosition="right"
            sizes={sizes}
          />
          <Grow>
            <Title>Our personal system</Title>
            <ParagraphContainer>
              <p>
                Based on our extensive experience and knowledge of running
                productions ourselves, we developed a time and money-saving dry
                hire system with a clear focus on the needs of the events
                industry. All our devices get checked and maintained before
                leaving our warehouse by our in-house technical department.
              </p>
              <p>
                By stocking large quantities of the most up-to-date and
                innovative special effects and accessories from the world&apos;s
                best manufacturers, we are confident we will provide you with
                the perfect gear.
              </p>
            </ParagraphContainer>
            <ButtonContainer>
              <Button
                type="button"
                variant="primary"
                text="See all products"
                href="/dry-hire/catalog"
                fullWidth={isSmall}
              />
              <Button
                type="button"
                variant="secondary"
                text="Download pdf catalog"
                fullWidth={isSmall}
                href="/catalogus2023 v1.pdf"
                icon={<StyledDownloadSVG />}
                target="_blank"
                rel="noopener noreferrer"
              />
            </ButtonContainer>
          </Grow>
        </Section>
      </PageSection>
      <PageSection backgroundColor={colors.white}>
        <Section $padding="4rem 0 5rem" $gap="2rem">
          <Grow>
            <Title>A trusted partner</Title>
            <ParagraphContainer>
              <p>
                Creating unforgettable experiences has always been our goal
                since we started as a small special effects company. Over the
                years, we grew into an international player in the SFX industry,
                and we became a partner for all production companies in need of
                devices, consumables and advice.
              </p>
            </ParagraphContainer>
          </Grow>
          <ImageWithCorners
            src={pyrotecpanel}
            alt="Pyrotec panel"
            cornerPosition="left"
            sizes={sizes}
          />
        </Section>
      </PageSection>
      <PageSection backgroundColor={colors.lightBackground}>
        <Section $padding="2.5rem 0 4rem" $gap="2rem">
          <ImageWithCorners
            src={pyrotecpanel}
            alt="Pyrotec panel"
            cornerPosition="right"
            sizes={sizes}
          />
          <Grow>
            <Title>Logistics</Title>
            <ParagraphContainer>
              <p>
                We work with numerous of develivery services and have dedicated
                drivers to make arrange the fastest service possible. Keep in
                mind that all mentioned times are estimates in normal
                conditions.
              </p>
            </ParagraphContainer>
          </Grow>
        </Section>
      </PageSection>
    </Container>
  );
};

export default InfoSection;
