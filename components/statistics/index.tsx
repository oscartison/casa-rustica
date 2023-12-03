import {  Group, Paper, SimpleGrid, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconBed,
  IconBath,
  IconBeach,
  IconPaw,
  IconWifi,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import classes from './StatsGrid.module.css';

const icons = {
  room: IconBed,
  bathroom: IconBath,
  animal: IconPaw,
  wifi: IconWifi
};

const data = [
  { description: 'Up to 10 people', icon: 'room', value: '4 rooms' },
  { description: '1 bath and 2 showers', icon: 'bathroom', value: '2 bathrooms', diff: -13 },
  { description: 'Animals are allowed', icon: 'animal', value: 'Animal friendly', diff: 18 },
  { description: '+ TV and 24\' monitor ', icon: 'wifi', value: 'Wifi available', diff: -30 },
] as const;

function StatsGrid() {
    const isMobile = useMediaQuery('(max-width: 56.25em)');

    const {t} = useTranslation('home')

  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];

    return (
      <Paper className={classes.card} withBorder p="md" radius="md" shadow='md' key={stat.icon}>
        <Group >
    
          <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
        </Group>

        <Group align="flex-end"  mt={25}>
          <Text className={classes.value}>{t(stat.value)}</Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          {t(stat.description)}
        </Text>
      </Paper>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid className={classes.grid} cols={isMobile? 2 : 4}>{stats}</SimpleGrid>
    </div>
  );
}

export default StatsGrid