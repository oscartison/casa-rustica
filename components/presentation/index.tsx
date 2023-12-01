import {
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import {  IconBeach, IconHome2, IconSun } from '@tabler/icons-react';
  import classes from './FeaturesCards.module.css';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';


  
  const mockdata = [
    {
      title: 'beach',
      description:
      'beachDescription',
      icon: IconBeach,
    },
    {
      title: 'spacious',
      description:
        'spaciousDescription',
      icon: IconHome2,
    },
    {
      title: 'garden',
      description:
'gardenDescription',      icon: IconSun,
    },
  ];
  
const FeaturesCards= () =>  {
    const theme = useMantineTheme();
    const { t } = useTranslation('home')
    const isMobile = useMediaQuery('(max-width: 56.25em)');

    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.dark[3]}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {t(feature.title)}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {t(feature.description)}
        </Text>
      </Card>
    ));
  
    return (
      <Container maw={1000} size="lg" py="xl"> 
        <SimpleGrid cols={isMobile ? 1 : 3} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }

  export default FeaturesCards;