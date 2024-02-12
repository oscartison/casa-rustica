import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  PaperProps,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {useRouter} from 'next/router'; 
import Logo from '../../app/logos/logo_name.png';
import styled from 'styled-components';
import Image from 'next/image';
import { LanguagePicker } from './languageSwitcher';
import Link from 'next/link';


const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 999,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    paddingTop: '10rem',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: rem(48),
    alignItems: 'center',
    minHeight: '100vh',
    maxHeight:'100vh',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

const StyledLogo = styled(Image)`
  height: 2.5rem;
  width: 14rem;
`;

const StyledPaper = styled(Paper)<PaperProps>`
min-height:100vh ;
`

const Space = styled.div`
  margin-top: 2rem;
`

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const router = useRouter() 
  const active = router.pathname;

  const items = links.map((link) => (
    <Link
      key={link.label}
      onClick={close}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={0} className={classes.root}>
      <Container className={classes.header}>
      <StyledLogo src={Logo} alt="logo" />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <div className={classes.links}>
          <LanguagePicker />
          </div>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <StyledPaper className={classes.dropdown} withBorder style={styles}>
              {items}
              <Space>
              <LanguagePicker />
              </Space>
            </StyledPaper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}