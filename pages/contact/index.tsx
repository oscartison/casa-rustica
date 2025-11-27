import {  BackgroundImageProps, Container, Divider } from '@mantine/core';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import Seo from '../../components/_common/seo';
import { ContactUs } from '../../components/contact';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'next-i18next';
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../../components/map/map"), {
  loading: () => (
    <div className="h-full w-full flex justify-center items-center text-3xl text-black/40">
      <p>Loading...</p>
    </div>
  ),
  ssr: false,
});



const TextContainer = styled.div<{$isMobile: boolean}>`
  width: 100%;
  margin: 3rem auto ;
  height: fit-content;
  border-radius: 1rem;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  gap: 2rem;
`

const Contact = () => {
    const isMobile = useMediaQuery('(max-width: 56.25em)');
    const {t} = useTranslation('common')

    return (
      <>
      <Seo title={`${t('contact')} - Casa Rustica`} />
      <TextContainer $isMobile={isMobile}>
        <ContactUs/>
        <Divider my="md" />
        <DynamicMap />
      </TextContainer>
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