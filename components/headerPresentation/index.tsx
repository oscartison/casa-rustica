import * as React from 'react';
import { Title, Text, Container, Button, Overlay, BackgroundImage } from '@mantine/core';
import classes from './HeroImageBackground.module.css';
import { useTranslation } from 'react-i18next';
import Home from '../../app/images/house/casa-drawing.jpeg'
import Link from 'next/link';
import { IconArrowDown } from '@tabler/icons-react';
import styled from 'styled-components';

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

  const scrollOutside = () => {
    window.scrollTo({
      top: (ref.current as any).offsetHeight,
      behavior: "smooth"
    })
  }
  return (
    <BackgroundImage ref={ref} className={classes.hero} src={Home.src}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
        className={classes.overlay}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>{t('title')}</Title>
        <Text className={classes.description} size="xl" mt="xl">
          {t('description')}
        </Text>
        <ButtonContainer>

          <Link href='/pictures' >
            <Button variant="gradient" size="md" radius="xl">
              {t('goToPictures')}
            </Button>

          </Link>
          <Button variant="link" styles={{
            leftIcon: { color: 'white' },
            label: { color: 'white' },
          }} onClick={scrollOutside} size="md" radius="xl" leftIcon={<IconArrowDown size={16} />}>
            {t('showMore')}

          </Button>
        </ButtonContainer>
      </Container>
    </BackgroundImage>
  );
};

export default HeaderPresentation;
