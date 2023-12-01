import cx from 'clsx';
import { Title, Text, Container, Button, Overlay, BackgroundImage } from '@mantine/core';
import classes from './HeroImageBackground.module.css';
import { useTranslation } from 'react-i18next';
import Home from '../../app/images/house/casa-drawing.jpeg'
import Link from 'next/link';


const HeaderPresentation = () => {
  const { t } = useTranslation("home");

  return (
    <BackgroundImage className={classes.hero} src={Home.src}>
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

        <Link href='/pictures' className={classes.control} >
        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          {t('goToPictures')}
          </Button>
        </Link>
      </Container>
    </BackgroundImage>
  );
};

export default HeaderPresentation;
