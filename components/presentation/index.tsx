import { List, Text, ThemeIcon, Title } from '@mantine/core';
import { IconBeach, IconCircleCheck, IconCircleDashed, IconHome2, IconSun, IconUsersGroup } from '@tabler/icons-react';
import { Trans, useTranslation } from 'next-i18next';
import styled, { css } from 'styled-components';

const Container = styled.div`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Presentation = () => {

  const { t } = useTranslation('home')

  return (
    <Container>
      <Title size='2.5rem'>
        {t('title')}
      </Title>
      <Text>
        <Trans>
          {t('description')}
        </Trans>
      </Text>
      <Title>
        {t('features')}
      </Title>
      <List
        spacing="md"
        size="md"
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconHome2 size="1rem" />
          </ThemeIcon>
        }
      >
        <List.Item>
          <Trans>
            {t('spacious')}
          </Trans>
        </List.Item>
        <List.Item icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCircleDashed size="1rem" />
          </ThemeIcon>
        }>
          <Trans>

            {t('modern')}
          </Trans>

        </List.Item>
        <List.Item icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconSun size="1rem" />
          </ThemeIcon>
        }>
          <Trans>

            {t('garden')}
          </Trans>

        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconBeach size="1rem" />
            </ThemeIcon>
          }
        >
          <Trans>

            {t('beach')}
          </Trans>

        </List.Item>
        <List.Item icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconUsersGroup size="1rem" />
          </ThemeIcon>
        }>
          <Trans>

            {t('family')}
          </Trans>

        </List.Item>
      </List>
      <Text>
        <Trans>

          {t('book')}
        </Trans>

      </Text>
    </Container>
  );
};

export default Presentation;
