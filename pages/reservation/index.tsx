import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import Seo from '../../components/_common/seo';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import prisma from '../../lib/prisma';
import { Period } from '@prisma/client';
import * as React from 'react';
import { DatePicker } from '@mantine/dates';

const TextContainer = styled.div<{$isMobile: boolean}>`
  margin-top: ${props => props.$isMobile ? '2rem' : "4rem"};
  height: fit-content;
  background: rgba(255,255,255,0.8);
  display:flex;
  justify-content:center;
`

const Contact = ({ periods }: {periods: Period[]}) => {
    console.log({periods});
  const isMobile = useMediaQuery('(max-width: 56.25em)');
 const {t} = useTranslation('common')
 const [value, setValue] = React.useState<[Date | null, Date | null]>([null, null]);
  
 const price = React.useMemo(()=> {
  if(value[1] !== null && value[0]!== null) {
  const pricePeriod = periods.filter((period) => value[1] > new Date(period.fromDate)  && value[1] < new Date(period.toDate) )
  if(pricePeriod.length > 0) {
    return pricePeriod[0].price * (Math.ceil(Math.abs(value[1].getTime() - value[0].getTime())/ (1000*60*60*24)))
  }
  }
  return 0
 },[value])

  return (
    <>
    <Seo title={`${t('pictures')} - Casa Rustica`} />
      <TextContainer $isMobile={isMobile}>
      <DatePicker type="range" value={value} onChange={setValue} />
      {price}
      </TextContainer>
  </>
  );
};

export default Contact;

export async function getStaticProps({ locale }) {
    const periods: Period[] = await prisma.period.findMany();

    return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home','common'
      ])),
      periods:  JSON.parse(JSON.stringify(periods))
    },
  }
}