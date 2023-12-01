import styled from 'styled-components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Seo from '../components/_common/seo';
import Presentation from '../components/presentation';
import { useMediaQuery } from '@mantine/hooks';
import HeaderPresentation from '../components/headerPresentation';



const TextContainer = styled.div<{$isMobile: boolean}>`
margin-top: 4rem;
  background: rgba(255,255,255,0.8);
  display:flex;
  flex-direction: column;
  justify-content:center;
  padding-bottom: 6rem;
  
`

export default function LandingPage() {
  const isMobile = useMediaQuery('(max-width: 56.25em)');

  return (
    <>
      <Seo title="Home - Casa Rustica" />
        <TextContainer $isMobile={isMobile}>
          <HeaderPresentation />
          <Presentation />
        </TextContainer>
    </>
  );
}


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home','common'
      ])),
    },
  }
}
