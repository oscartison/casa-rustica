import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
import Pictures from '../../components/pictures';

import Seo from '../../components/_common/seo';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'next-i18next';

const TextContainer = styled.div<{$isMobile: boolean}>`
  margin-top: ${props => props.$isMobile ? '2rem' : "4rem"};
  height: fit-content;
  background: rgba(255,255,255,0.8);
  display:flex;
  justify-content:center;
`

const Contact = () => {
  const isMobile = useMediaQuery('(max-width: 56.25em)');
 const {t} = useTranslation('common')

  return (
    <>
    <Seo title={`${t('pictures')} - Casa Rustica`} />
      <TextContainer $isMobile={isMobile}>
        <Pictures />
      </TextContainer>
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