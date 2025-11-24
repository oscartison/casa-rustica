import * as React from 'react';
import { Title, Text, Grid } from '@mantine/core';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Home from '../../app/images/house/8b.webp'




const About = () => {
  const { t } = useTranslation("home");

  return (
<Grid align="center" style={{width: "90%", alignSelf: 'center', justifyContent: 'center', maxWidth: "71.25rem"}} >
  <Grid.Col xs={12} md={6}>
    <Title order={2} mb="sm">{t('about')}</Title>
    <Text size="lg" maw="90%" lh={1.7} mt='md' ta="justify">
      {t('aboutDescription')}
    </Text>
  </Grid.Col>

  <Grid.Col xs={12} md={4}>
    <Image alt="house" style={{borderRadius: '1rem'}} width={400} src={Home} />
  </Grid.Col>
</Grid>

  );
};

export default About;
