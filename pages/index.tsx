import styled from 'styled-components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Seo from '../components/_common/seo';
import Presentation from '../components/presentation';
import { useMediaQuery } from '@mantine/hooks';
import HeaderPresentation from '../components/headerPresentation';
import StatsGrid from '../components/statistics';
import * as React from 'react'
import prisma from '../lib/prisma';
import { Visitor} from '@prisma/client';


const TextContainer = styled.div<{$isMobile: boolean}>`
margin-top: 4rem;
  background: rgba(255,255,255,0.8);
  display:flex;
  flex-direction: column;
  justify-content:center;
  padding-bottom: 6rem;
  
`

export default function LandingPage({ip}: {ip:string}) {
  const isMobile = useMediaQuery('(max-width: 56.25em)');

  return (
    <>
      <Seo title="Home - Casa Rustica" />
        <TextContainer $isMobile={isMobile}>
          <HeaderPresentation />
          <Presentation />
          <StatsGrid />
        </TextContainer>
    </>
  );
}


export async function getServerSideProps({req, locale }) {
  const forwarded = req.headers["x-forwarded-for"]
  const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress

  const visitor: Visitor | null = await prisma.visitor.findFirst({where: {ipAddress: ip}})

  if(visitor) {
    await prisma.visitor.update({data: {views:visitor.views +1 },where: {id: visitor.id}})
  } else {
    await prisma.visitor.create({data: {ipAddress:ip,views:1}})

  }
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home','common'
      ])),
    },
  }
}
