import * as React from 'react';
import { Title, Text, Container, Button, BackgroundImage } from '@mantine/core';
import classes from './HeroImageBackground.module.css';
import Home from '../../app/images/house/house.webp'
import Link from 'next/link';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 56.25em) {
  flex-direction:column ;
  }
`


const HeaderPresentation = () => {
  const { t } = useTranslation("home");
  const ref = React.useRef(null);


  return (
    <BackgroundImage ref={ref} className={classes.hero} src={Home.src}>
      <Container className={classes.container} size="md">
        <Title className={classes.title} ta="center">{t('title')}</Title>
        <Text className={classes.description} size="xl">
          {t('description')}
        </Text>
        <ButtonContainer>

          <Link href='/pictures' >
            <Button  size="lg" radius="xl" styles={{
            root: {
              backgroundColor: "#b47b56",
              ":hover": {
                backgroundColor: "#a66d4e",
              },
            }}}>
              {t('goToPictures')}
            </Button>

          </Link>
         
        </ButtonContainer>
      </Container>
    </BackgroundImage>
  );
};

export default HeaderPresentation;
