import { useRouter } from "next/router";

import { useState } from 'react';
import { createStyles, UnstyledButton, Menu, Image, Group, rem } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

const data = [
  { label: 'English', path: 'en' },
  { label: 'Nederlands', path: 'nl' },
  { label: 'français', path: 'fr' },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    zIndex: 100,
    width: rem(120),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: 'background-color 150ms ease',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: 'transform 150ms ease',
    transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
  },
}));

export function LanguagePicker() {
  const router = useRouter();

  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data.find((el) => el.path === router.locale )?? data[0]);
  const items = data.map((item) => (
    <Menu.Item
      onClick={() => {
        setSelected(item);
        router.push(
          {
            pathname: router.pathname,
            query: router.query,
          },
          undefined,
          { locale: item.path }
        )
      }}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown  className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  )}

