import { BackgroundImage, BackgroundImageProps } from '@mantine/core';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Home from '../../app/images/house/house.jpeg'
import styled from 'styled-components';
import Pictures from '../../components/pictures';

import Seo from '../../components/_common/seo';
import { useMediaQuery } from '@mantine/hooks';

const StyledBackImage = styled(BackgroundImage)<BackgroundImageProps>`
  height: calc(100vh - 3rem);
  max-height: calc(100vh - 3rem);
  width: 100vw;
  margin-top: 3rem;
  overflow-y: scroll;
  backdrop-filter: blur(5px);
  display:flex;
  justify-content:center;
  align-items: flex-start;
`;

const TextContainer = styled.div<{$isMobile: boolean}>`
  width: 1000px;
  margin-bottom: 5rem;
  margin-top: ${props => props.$isMobile ? '0' : "8rem"};
  min-height: fit-content;
  background: rgba(255,255,255,0.8);
  display:flex;
  justify-content:center;
`

const Contact = () => {
  const isMobile = useMediaQuery('(max-width: 56.25em)');

  return (
    <>
    <Seo title="Casa Rustica" />
      <StyledBackImage src={Home.src}>
      <TextContainer $isMobile={isMobile}>
        <Pictures />
      </TextContainer>
      </StyledBackImage>
  </>
  );
};

export default Contact;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home','common'
      ])),
    },
  }
}