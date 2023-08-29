import Image from 'next/image';
import * as React from 'react';
import styled from 'styled-components';

import { TimelineItem } from '../../../app/data/timelinedata';
import TimelineBullet from '../../../app/icons/timelineAnchor.svg';
import { colors, fontWeights, mediaQueries } from '../../../styles/theme';
import PageSection from '../pageSection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0 5rem 1rem;
`;

const Title = styled.h3`
  color: ${colors.primary};
  font-size: 1.75rem;
  font-weight: ${fontWeights.light};
  line-height: 2.5rem;
  margin: 0 0 2rem 0;

  ${mediaQueries.medium`
    font-size: 3rem;
    line-height: 3rem;
    text-align: center;
    margin-bottom: 4rem;
  `};
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  border-left: 1px solid ${colors.primary};
  gap: 2rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  position: relative;
`;

const ItemContent = styled.div<{ $hasImage: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  line-height: 1.5rem;
  font-size: 1rem;

  ${mediaQueries.medium`
    margin-bottom: ${({ $hasImage }) => ($hasImage ? '13.5rem' : '0')};
  `};
`;

const Year = styled.p`
  color: ${colors.primary};
  font-weight: ${fontWeights.black};
`;

const Description = styled.p`
  color: ${colors.text};
`;

const StyledTimelineBullet = styled(TimelineBullet)`
  position: absolute;
  left: -16.5px;
  top: -5px;
  margin-right: 1rem;

  > g {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  border-top: 0.25rem solid ${colors.lightBackground};
`;

const MediumLargeImageContainer = styled.div`
  display: none;

  ${mediaQueries.medium`
    display: flex;
    flex-direction: column;
    gap: 8rem;
    padding-top: 5rem;
  `};

  ${mediaQueries.large`
    gap: 3rem;
  `};
`;

const MobileImage = styled(Image)`
  margin-top: 1rem;

  ${mediaQueries.medium`
    display: none;
  `};
`;

const MediumLargeImage = styled(Image)`
  display: none;

  ${mediaQueries.medium`
    display: block;
    max-width: 360px;
  `};

  ${mediaQueries.large`
    max-width: 480px;
  `};
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  ${mediaQueries.medium`
    justify-content: center;
  `};

  ${mediaQueries.large`
    gap: 5rem;
  `};
`;

type Props = {
  timelineItems: TimelineItem[];
};

const Timeline = ({ timelineItems }: Props) => {
  return (
    <PageSection backgroundColor={colors.white}>
      <Divider />
      <Container>
        <Title>The story of AVM</Title>
        <TimelineContainer>
          <MediumLargeImageContainer>
            {timelineItems.map((item) => (
              <React.Fragment key={item.id}>
                {item.image && (
                  <MediumLargeImage src={item.image} alt={item.description} />
                )}
              </React.Fragment>
            ))}
          </MediumLargeImageContainer>
          <ItemsContainer>
            {timelineItems.map((item) => (
              <Item key={item.id}>
                <StyledTimelineBullet />
                <ItemContent $hasImage={item.image !== undefined}>
                  <Year>{item.year}</Year>
                  <Description>{item.description}</Description>
                  {item.image && (
                    <MobileImage src={item.image} alt={item.description} />
                  )}
                </ItemContent>
              </Item>
            ))}
          </ItemsContainer>
        </TimelineContainer>
      </Container>
    </PageSection>
  );
};

export default Timeline;
