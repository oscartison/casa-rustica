import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';

import { type RandomImage } from '../../../app/data/randomImages';
import DownloadSVG from '../../../app/icons/download.svg';
import HelpSVG from '../../../app/icons/help.svg';
import useMediaQuery from '../../../hooks/useMediaQuery';
import {
  colors,
  fontWeights,
  mediaQueries,
  screenSizes,
} from '../../../styles/theme';
import Button from '../../_common/button';
import ImageWithCross from '../../_common/imageWithCross';
import PageSection from '../../_common/pageSection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.text};
  justify-content: center;

  ${mediaQueries.medium`
    flex-direction: row;
  `};
`;

const Column = styled.div<{ $gap: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ $gap }) => $gap};
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${colors.primary};
  font-weight: ${fontWeights.medium};
`;

const Slogan = styled.p`
  font-size: 1rem;
  font-weight: ${fontWeights.semibold};
  line-height: 1.5rem;
  text-align: center;
  max-width: 280px;

  ${mediaQueries.medium`
    margin-bottom: 1.5rem;
  `};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid ${colors.divider};
  border-bottom: 2px solid ${colors.divider};
  padding: 1.25rem 0;
  margin-top: -2rem;
  z-index: 2;

  ${mediaQueries.medium`
    margin: 0;
    padding: 2rem 0;
  `};
`;

const Description = styled.p`
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

const Contact = styled.p`
  font-weight: ${fontWeights.medium};
  font-style: italic;
  line-height: 1.5rem;
  margin-top: 1.5rem;
`;

const StyledHelpSVG = styled(HelpSVG)`
  > use {
    fill: ${colors.primary};
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  align-self: baseline;
  margin-bottom: 3rem;
`;

const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-weight: ${fontWeights.bold};
  line-height: 1.5rem;
`;

const Absolute = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;

  ${mediaQueries.medium`
    position: unset;
  `};
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const LeftSection = styled.div`
  z-index: 2;
  width: 50%;

  ${mediaQueries.medium`
    display: none;
  `};
`;

const RightSection = styled.div`
  z-index: 2;

  ${mediaQueries.medium`
    margin-top: 6.5rem;
    max-width: 50%;
  `};

  ${mediaQueries.large`
    max-width: 640px;
    margin-top: 0;
  `};
`;

const StyledDownloadSVG = styled(DownloadSVG)`
  > path {
    fill: ${colors.primary};
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 50%;
  max-width: 640px;

  ${mediaQueries.medium`
    display: block;
  
  `};
`;

type Props = {
  randomProduct: RandomImage;
};

const Hero = ({ randomProduct }: Props) => {
  const isSmall = useMediaQuery(`(max-width: ${screenSizes.medium}px)`);

  return (
    <PageSection backgroundColor="transparant">
      <Container>
        {!isSmall && (
          <ImageWrapper>
            <ImageWithCross image={randomProduct} isHomePage />
          </ImageWrapper>
        )}
        <LeftSection />
        <RightSection>
          <ImageContainer>
            <Absolute>
              <Title>DRY HIRE</Title>
              <Slogan>Special effects & pyrotechnics for professionals.</Slogan>
            </Absolute>
            {isSmall && (
              <ImageWrapper>
                <ImageWithCross image={randomProduct} isHomePage />
              </ImageWrapper>
            )}
          </ImageContainer>
          <InfoContainer>
            <Description>
              As a one-stop-shop, we have a massive inventory of special effects
              in stock, ready for any event.
            </Description>
            <Column $gap="0.5rem">
              <Button
                type="button"
                variant="primary"
                text="Browse our online catalog"
                href="/dry-hire/catalog"
                fullWidth
              />
              <Button
                type="button"
                variant="secondary"
                text="Download pdf catalog"
                fullWidth
                href="/catalogus2023 v1.pdf"
                icon={<StyledDownloadSVG />}
                target="_blank"
                rel="noopener noreferrer"
              />
            </Column>
          </InfoContainer>
          <Contact>Have any questions? Need help with your project?</Contact>
          <Row>
            <StyledHelpSVG />
            <StyledLink href="/contact">Contact our SFX experts</StyledLink>
          </Row>
        </RightSection>
      </Container>
    </PageSection>
  );
};

export default Hero;
