import Image from 'next/image';
import styled from 'styled-components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useTranslation } from 'next-i18next';


import Seo from '../components/_common/seo';
import Logo from '../app/logos/logo-no-background.png';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template: 1fr 1fr / auto auto auto;
  padding-top: 10rem;
  background-color: #77d4fc;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Center = styled.div`
  width: 100%;
  display:flex;
  justify-content:center;
`

const StyledLogo = styled(Image)`
  width: 20rem;
`;

export default function LandingPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <Seo title="Casa Rustica" />
      <Container>
        <Title> {t('Coming Soon ...')}</Title>
        <Center>
        <StyledLogo src={Logo} alt="logo" />
        </Center>
      </Container>
    </>
  );
}


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}
