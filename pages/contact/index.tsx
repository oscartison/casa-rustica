import {  BackgroundImageProps, Container } from '@mantine/core';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Home from '../../app/images/house/house.webp'
import styled from 'styled-components';

import Seo from '../../components/_common/seo';
import { ContactUs } from '../../components/contact';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'next-i18next';

const StyledBackImage = styled(Container)<BackgroundImageProps>`
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
  margin-top: ${props => props.$isMobile ? '0' : "8rem"};
  height: fit-content;
  background-color: #fafcff;
  border-radius: 1rem;
  display:flex;
  justify-content:center;
`

const Contact = () => {
    const isMobile = useMediaQuery('(max-width: 56.25em)');
    const {t} = useTranslation('common')

    return (
      <>
      <Seo title={`${t('contact')} - Casa Rustica`} />
      <StyledBackImage src={Home.src}>
      <TextContainer $isMobile={isMobile}>
        <ContactUs/>
      </TextContainer>
      </StyledBackImage>
  </>
  );
};

export default Contact;

export async function getStaticProps({ locale }) {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common", "prices"])),
    }
  };
}